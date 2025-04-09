"use server";
import { eventSubEventData } from "@/data/event-subeventData";
import { connectToDatabase } from "@/lib/mongodb";
import { Event, IEvent } from "@/models/event.model";
import { ITeam, Team } from "@/models/team.model";
import { Transaction, ITransaction } from "@/models/transaction.model";
import { IUser, User } from "@/models/user.model";

export async function addTransactionIdAction(transactionId: string, userEmail: string, currentPayAmount: number): Promise<ITransaction> {
    try {
        await connectToDatabase();

        // Create a new transaction object
        const newTransaction = new Transaction({
            transactionId,
            userEmail,
            currentPayAmount,
            amountAtAdmin: 0,
            acknowledgementByAdmin: false,
            clearanceApproval: false,
        });
        
        // Save the transaction to the database
        const savedTransaction = await newTransaction.save();
        
		return JSON.parse(JSON.stringify(savedTransaction));
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Failed to add transaction ID: ${error.message}`);
        } else {
            throw new Error("Failed to add transaction ID");
        }
    }
}

export async function getTransactionsByUserEmail(userEmail: string): Promise<(ITransaction & {createdAt : Date})[]> {
    try {
        await connectToDatabase();

        // Find all transactions for the given userEmail
        const transactions = await Transaction.find({ userEmail }).lean<ITransaction[]>();

		return JSON.parse(JSON.stringify(transactions));
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Failed to get transactions for user: ${error.message}`);
        } else {
            throw new Error("Failed to get transactions for user");
        }
    }
}


function calculatePayAmount(
	individualSchemaCount: number,
	teamSchemaCount: number
): number {
	const totalTeams = individualSchemaCount + teamSchemaCount;

	// If the sum of both teams is >= 4, return 499
	if (totalTeams >= 4) {
		return 499;
	}

	let payAmount = 0;

	// Calculate pay amount for individualSchema teams
	if (individualSchemaCount === 1) {
		payAmount += 99;
	} else if (individualSchemaCount === 2 || individualSchemaCount === 3) {
		payAmount += 199;
	}

	// Calculate pay amount for teamSchema teams
	if (teamSchemaCount === 1) {
		payAmount += 299;
	} else if (teamSchemaCount === 2) {
		payAmount += 299 * 2;
	} else if (teamSchemaCount === 3) {
		payAmount += 299 * 3;
	}

	return payAmount;
}

export interface IPaymentData {
	fullName: string;
	email: string;
	mobileNumber: string;
	eventNames: string;
	individualSchemaCount: number;
	teamSchemaCount: number;
	payableAmount: number;
	numberOfTransactions: number;
	acknowledgedTransactions: number;
	acknowledgedAmount: number;
	payClearance: boolean;
}

export async function getPaymentData(): Promise<
	IPaymentData[] | null
> {
	try {
		await connectToDatabase();

		// Fetch all users with isOutsider == true
		const users = await User.find({
			isAdmin: false,
			$expr: { $gte: [{ $size: "$teams" }, 1] },
		}).lean<IUser[]>();

		const paymentDataArray = await Promise.all(
			users.map(async (user) => {
				const { email, fullName, mobileNumber } = user;

				// Fetch teams where the user is the leader
				const teams = await Team.find({ leader: email }).lean<
					ITeam[]
				>();

				if (teams.length === 0) {
					return null;
				}

				// Fetch leader and event details manually
				const populatedTeams = await Promise.all(
					teams.map(async (team) => {
						const [leader, event, members] = await Promise.all([
							User.findOne({ email: team.leader })
								.select("fullName email isOutsider")
								.lean<{
									fullName: string;
									email: string;
									isOutsider: boolean;
								}>(),
							Event.findById(team.event).lean<IEvent>(),
							User.find({ email: { $in: team.members } })
								.select("fullName email isOutsider")
								.lean<
									{
										fullName: string;
										email: string;
										isOutsider: boolean;
									}[]
								>(),
						]);

						// Check if any member is an outsider
						const anyMemberIsOutsider = members.some(
							(member) => member.isOutsider
						);

						// If no member is an outsider, return null
						if (!anyMemberIsOutsider) {
							return null;
						}

						const individualSchema =
							team.members.length == 1 && leader?.isOutsider;
						return {
							...team,
							members,
							leader,
							event,
							individualSchema,
						};
					})
				);

				const leadingTeams = populatedTeams.filter(
					(data) => data !== null
				);

				if (leadingTeams.length === 0) {
					return null;
				}

				const eventIds = leadingTeams.map((team) =>
					team.event?._id?.toString()
				);

				const eventNames: string[] = [];
				const individualSchemaCount = leadingTeams.filter(
					(team) => team.individualSchema
				).length;
				const teamSchemaCount = leadingTeams.filter(
					(team) => !team.individualSchema
				).length;

				eventSubEventData.events.forEach((event) => {
					if (eventIds.includes(event.event)) {
						if (!eventNames.includes(event.eventName)) {
							eventNames.push(event.eventName);
						}
					} else {
						event.subEvents.forEach((subEvent) => {
							if (eventIds.includes(subEvent.subEvent)) {
								if (!eventNames.includes(event.eventName)) {
									eventNames.push(event.eventName);
								}
							}
						});
					}
				});

				const payableAmount = calculatePayAmount(
					individualSchemaCount,
					teamSchemaCount
				);

				// Fetch transactions
				const transactions = await Transaction.find({
					userEmail: email,
				}).lean<ITransaction[]>();
				const numberOfTransactions = transactions.length;
				const acknowledgedTransactions = transactions.filter(
					(transaction) => transaction.acknowledgementByAdmin === true
				).length;
				const acknowledgedAmount = transactions.reduce(
					(acc, transaction) =>
						acc +
						(transaction.acknowledgementByAdmin === true
							? transaction.amountAtAdmin
							: 0),
					0
				);

				const payClearance = payableAmount <= acknowledgedAmount;

				return {
					fullName,
					email,
					mobileNumber,
					eventNames: eventNames.join(", "),
					individualSchemaCount,
					teamSchemaCount,
					payableAmount,
					numberOfTransactions,
					acknowledgedTransactions,
					acknowledgedAmount,
					payClearance,
				};
			})
		);

		// Filter out null values
		return JSON.parse(
			JSON.stringify(paymentDataArray.filter((data) => data !== null))
		);
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Failed to fetch payment data: ${error.message}`);
		} else {
			throw new Error(
				"Failed to fetch payment data due to an unknown error"
			);
		}
	}
}
