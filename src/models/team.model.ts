import { Schema, model, Document, Types, models } from "mongoose";

// Define the interface for the Team document
interface ITeam extends Document {
	leader: string;
	members: string[];
	event: Types.ObjectId;
	size: number;
	invites: Types.ObjectId[];
}

// Define the team schema
const teamSchema = new Schema<ITeam>(
	{
		leader: {
			type: String,
			required: true,
			match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
		},
		members: [
			{
				type: String,
				required: true,
				match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
				default: function () {
					return [this.leader];
				},
			},
		],
		event: {
			type: Schema.Types.ObjectId,
			ref: "Event",
			required: true,
		},
		size: {
			type: Number,
			required: true,
		},
		invites: [
			{
				type: Types.ObjectId,
				ref: "Invitation",
			},
		],
	},
	{
		timestamps: true,
	}
);

// Create and export the team model
const Team = models?.Team || model<ITeam>("Team", teamSchema);

export { Team };
export type { ITeam };
