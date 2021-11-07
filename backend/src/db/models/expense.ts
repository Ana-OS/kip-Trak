import { Schema, model } from 'mongoose';

export interface IExpense {
    value: number;
}

const ExpenseSchema: Schema = new Schema(
    {
        value: { type: Number, require: true }
    }
)

export default model<IExpense>('Expense', ExpenseSchema)