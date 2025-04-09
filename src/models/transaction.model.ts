import { Schema, model, Document, models } from "mongoose";

interface ITransaction extends Document {
    transactionId: string;
    userEmail: string;
    currentPayAmount: number;
    amountAtAdmin: number;
    acknowledgementByAdmin: boolean;
    clearanceApproval: boolean;
}

const transactionSchema = new Schema<ITransaction>(
    {
        transactionId: {
            type: String,
            required: true,
            unique: true,
        },
        userEmail: {
            type: String,
            required: true,
        },
        currentPayAmount: {
            type: Number,
            required: true,
        },
        amountAtAdmin: {
            type: Number,
            default: 0,
        },
        acknowledgementByAdmin: {
            type: Boolean,
            default: false,
        },
        clearanceApproval: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true, // Automatically manage createdAt and updatedAt fields
    }
);

const Transaction = models?.Transaction || model<ITransaction>("Transaction", transactionSchema);

export { Transaction };
export type { ITransaction };