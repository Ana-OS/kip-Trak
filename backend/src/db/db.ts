import IRepository from "./repository";
import UserDto from "../dtos/userDto";
import Expense, { IExpense } from '../db/models/expense'
import { User } from "./models/user";

export class Database implements IRepository {

    private initRepo(): void {
        // TODO Implement logic to connect to Mongo
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