"use server";

// src/actions/team-actions.ts
import { connectToDatabase } from "@/lib/mongodb";
import { Invitation } from "@/models/invitation.model";
import { Team } from "@/models/team.model";
import { getUser } from "./user-actions";
import { User } from "@/models/user.model";
import { getParticipatingEventsCountAction } from "./event-actions";

// Send team invite
export async function sendTeamInviteAction({
	teamId,
	inviteeEmail,
}: {
	teamId: string;
	inviteeEmail: string;
}) {
	try {
		await connectToDatabase();

		const user = await getUser();
		if (!user) {
			throw new Error("User not found");
		}

		// 1. Verify current user is team leader
		const team = await Team.findById(teamId);
		if (!team) {
			throw new Error(`Team with ID ${teamId} not found`);
		}
		if (team.leader !== user.email) {
			throw new Error("Only the team leader can send invites");
		}

		// 2. Verify team has space for more members
		if (team.members.length >= team.size) {
			throw new Error("Team is already full");
		}

		// 3. Create invite record in database
		const newInvite = new Invitation({
			teamId: team._id,
			inviterEmail: user.email,
			inviteeEmail: inviteeEmail,
			status: "PENDING",
		});
		const savedInvite = await newInvite.save();

		// 4. Append inviteId to team's invites
		team.invites.push(savedInvite._id);
		await team.save();

		return JSON.parse(
			JSON.stringify({ success: true, invite: savedInvite })
		);
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Failed to send invite: ${error.message}`);
		} else {
			throw new Error("Failed to send invite due to an unknown error");
		}
	}
}

export async function cancelInviteAction(inviteId: string) {
	try {
		await connectToDatabase();

		// Find the invite
		const invite = await Invitation.findById(inviteId);
		if (!invite) {
			throw new Error(`Invite with ID ${inviteId} not found`);
		}

		// Verify the current user is the team leader
		const team = await Team.findById(invite.teamId);
		if (!team) {
			throw new Error(`Team with ID ${invite.teamId} not found`);
		}

		// Update the invite status to "CANCELED"
		invite.status = "CANCELED";
		await invite.save();

		return { success: true };
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Failed to cancel invite: ${error.message}`);
		} else {
			throw new Error("Failed to cancel invite due to an unknown error");
		}
	}
}

export async function acceptInviteAction(inviteId: string) {
	try {
		await connectToDatabase();

		const invite = await Invitation.findById(inviteId);
		if (!invite) {
			throw new Error(`Invite with ID ${inviteId} not found`);
		}

		const team = await Team.findById(invite.teamId);
		if (!team) {
			throw new Error(`Team with ID ${invite.teamId} not found`);
		}

		// Add inviteeEmail to members array of Team
		if (team.members.includes(invite.inviteeEmail)) {
			throw new Error("Invitee is already a member of the team");
		}
		
		// Find the invitee user and append the teamId to the user.teams array
		const inviteeUser = await User.findOne({ email: invite.inviteeEmail });
		if (!inviteeUser) {
			throw new Error(
				`Invitee with email ${invite.inviteeEmail} not found`
			);
		}

		// Get all the events that the user has registered for
        const userEvents = await Promise.all(
            inviteeUser.teams.map(async (teamId:string) => {
                const team = await Team.findById(teamId);
                return team.event.toString();
            })
        );

		// Check if the user has already registered for the event if yes, then throw an error
		if (userEvents.some(event => event == team.event)) {
			throw new Error("You have already registered for this event.");
		}
		const mainEventsCount = await getParticipatingEventsCountAction(userEvents, team.event.toString());
		
		if (
			inviteeUser.isOutsider &&
			(mainEventsCount.eventCount > 7 ||
				(mainEventsCount.eventCount == 7 &&
					!mainEventsCount.isNewEventIncluded))
		) {
			throw new Error(
				"Outsider Participants are not allowed to register for more than 7 events."
			);
		}
		
		team.members.push(invite.inviteeEmail);
		await team.save();

		inviteeUser.teams = [...inviteeUser.teams, team._id];
		await inviteeUser.save();

		invite.status = "ACCEPTED";
		await invite.save();

		return { success: true };
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Failed to accept invite: ${error.message}`);
		} else {
			throw new Error("Failed to accept invite due to an unknown error");
		}
	}
}

export async function rejectInviteAction(inviteId: string) {
	try {
		await connectToDatabase();

		const invite = await Invitation.findById(inviteId);
		if (!invite) {
			throw new Error(`Invite with ID ${inviteId} not found`);
		}

		invite.status = "REJECTED";
		await invite.save();

		return { success: true };
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Failed to reject invite: ${error.message}`);
		} else {
			throw new Error("Failed to reject invite due to an unknown error");
		}
	}
}
