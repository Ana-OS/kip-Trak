import IRepository from "./repository";
import UserDto from "../dtos/userDto";
import Expense, { IExpense } from '../db/models/expense'
import { User } from "./models/user";
import mongoose, { ConnectOptions } from 'mongoose';
// import mongoose, { ConnectOptions } from "mongoose";
require('dotenv').config();
const { DB_HOST, DB_NAME } = process.env

export class Database implements IRepository {

    private async initRepo(): Promise<void> {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        };
        mongoose.connect(`mongodb://${DB_HOST}/${DB_NAME}`, options as ConnectOptions).then(() => console.log('DB connection succsesful'));
    }

    constructor() {
        this.initRepo();
    }

    // loginUser(): Promise<UserDto | Error> {

    // };

    async getFixedMonthlyBudget(): Promise<IExpense | Error> {

        return await Expense.find()
            .then(results => {
                return results[0]
            })
            .catch(error => {
                return new Error(error)
            });
    }
}

export const db = new Database();