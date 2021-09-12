import IRepository from "./repository";
import UserDto from "../dtos/userDto";
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
}

export const db = new Database();