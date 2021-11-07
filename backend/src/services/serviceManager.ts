import IRepository from "../db/repository";
import ExpenseManager from "./expenseManager";

export default class ServiceManager {

    public expenseManager: ExpenseManager;
    // public savingManager: SavingManager;

    constructor(repo: IRepository) {
        this.expenseManager = new ExpenseManager(repo);
    }
}