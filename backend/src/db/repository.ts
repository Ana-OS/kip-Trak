import UserDto from "../dtos/userDto";
import { IExpense } from "./models/expense";

export default interface IRepository {
    // loginUser(): Promise<UserDto | Error>;
    getFixedMonthlyBudget(): Promise<IExpense | Error>;
}