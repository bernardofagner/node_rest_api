import { Request, Response } from "express";
import status from "http-status-codes";
import { ListUsersCommand } from "../Commands/Users/ListUsersCommand";
import { UserRepository } from "../Repositories/Sql/UserRepository";
import { UserEntity } from "../Entities/User/User.entity";
import { ListUsersRequest } from "../Suport/RequestResponse/ListUsersRequest";

export class UsersController {

    constructor() { }

    public async getAllusers(request: Request, response:Response): Promise<any> {

        const executor = new ListUsersCommand(new UserRepository());
        const req: ListUsersRequest = {
            ExecutionId: "da55c335-8f43-4453-9836-545e2901bcea",
        };

        try {            
            let allUsers = await executor.executeAsync(req);
            return response.status(status.OK).json(allUsers);
        }
        catch(Exception) {
            return response.status(status.OK).json(Exception);
        }
    }
}