import { response } from "express";
import { IExpense } from "../db/models/expense";
import IRepository from "../db/repository";

export default class ExpenseManager {

    public repo: IRepository;

    constructor(repo: IRepository) {
        this.repo = repo;
    }

    async getMonthlyFixedBudget(): Promise<IExpense | Error> {
        
        return await this.repo.getFixedMonthlyBudget();
    }
}