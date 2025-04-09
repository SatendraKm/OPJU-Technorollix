import { Schema, model, Document, Types, models } from "mongoose";

interface IAccommodation extends Document {
	arrivalTime: Date;
	departureTime: Date;
	additionalDetails: string;
	userId: Types.ObjectId;
	universityName: string; // Add universityName field
	gender: "Male" | "Female" | "Other"; // Add gender field with specific values
}

const accommodationSchema = new Schema<IAccommodation>(
	{
		arrivalTime: {
			type: Date,
			required: true,
		},
		departureTime: {
			type: Date,
			required: true,
		},
		additionalDetails: {
			type: String,
			required: false,
		},
		userId: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		universityName: {
			type: String,
			required: true, // Adjust based on whether this field is mandatory
		},
		gender: {
			type: String,
			enum: ["Male", "Female", "Other"], // Restrict to specific values
			required: true, // Adjust based on your requirement
		},
	},
	{
		timestamps: true, // Automatically manage createdAt and updatedAt fields
	}
);

const Accommodation =
	models?.Accommodation ||
	model<IAccommodation>("Accommodation", accommodationSchema);

export { Accommodation };
export type { IAccommodation };
