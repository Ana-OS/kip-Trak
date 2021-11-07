import express, { Request, Response } from "express";
import { IExpense } from "../db/models/expense";
import ServiceManager from "../services/serviceManager";
import BaseController from "./baseController";

export default class ExpensesController extends BaseController {

    public path = '/expenses';
    public router = express.Router();
    manager: ServiceManager;

    constructor(manager: ServiceManager) {
        super();
        this.manager = manager;
        this.initRoutes();
    }

    private initRoutes() {
        this.router.get(this.path + '/fixed', this.getMonthlyFixedBudget);
        this.router.post(this.path + '/fixed', this.postMonthlyFixedBudget);
    }

    private getMonthlyFixedBudget = async (req: Request, res: Response) => {
        
        const response: IExpense | Error = await this.manager.expenseManager.getMonthlyFixedBudget();
        this.respond(response, res);
    }

    private postMonthlyFixedBudget = async (req: Request, res: Response) => {

    }
}
