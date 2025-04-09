import { Schema, model, Document, Types, models } from "mongoose";

// Define the interface for the Invitation document
interface IInvitation extends Document {
	teamId: Types.ObjectId;
	inviterEmail: string;
	inviteeEmail: string;
	status: "ACCEPTED" | "PENDING" | "REJECTED" | "CANCELED";
}

// Define the invitation schema
const invitationSchema = new Schema<IInvitation>(
	{
		teamId: {
			type: Schema.Types.ObjectId,
			ref: "Team",
			required: true,
		},
		inviterEmail: {
			type: String,
			required: true,
			match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
		},
		inviteeEmail: {
			type: String,
			required: true,
			match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
		},
		status: {
			type: String,
			enum: ["ACCEPTED", "PENDING", "REJECTED", "CANCELED"],
			default: "PENDING",
		},
	},
	{
		timestamps: true,
	}
);

// Create and export the invitation model
const Invitation =
	models?.Invitation || model<IInvitation>("Invitation", invitationSchema);

export { Invitation };
export type { IInvitation };
