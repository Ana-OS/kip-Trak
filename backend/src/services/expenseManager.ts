import { response } from "express";
import mongoose from 'mongoose';
import { IExpense } from "../db/models/expense";
import IRepository from "../db/repository";
require('dotenv').config();
const {DB_HOST, DB_NAME} = process.env

export default class ExpenseManager {

    public repo: IRepository;

    private async initRepo():Promise<void> {
        const options = {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true
        };
        mongoose.connect(`mongodb://${DB_HOST}/${DB_NAME}`, options).then(() => console.log('DB connection succsesful'));
    }

    constructor(repo: IRepository) {
        this.initRepo()
        this.repo = repo;
    }

    async getMonthlyFixedBudget(): Promise<IExpense | Error> {
        
        return await this.repo.getFixedMonthlyBudget();
    }
}