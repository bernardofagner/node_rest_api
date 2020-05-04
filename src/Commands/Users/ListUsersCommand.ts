import { Request } from "express";
import { UserRepository } from "../../Repositories/Sql/UserRepository";
import { UserEntity } from "../../Entities/User/User.entity";
import { ListUsersResponse } from "../../Suport/RequestResponse/ListUsersResponse";
import { ListUsersRequest } from "../../Suport/RequestResponse/ListUsersRequest";

export class ListUsersCommand {

    private readonly usersRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.usersRepository = userRepository;
     }

    public async executeAsync(request: ListUsersRequest) {

        await this.usersRepository.HeathCkech();
        const allUsers: UserEntity[] = await this.usersRepository.getAll();

        const result: ListUsersResponse = {
            Users: allUsers
        };

        console.log("Users:", result)
        return result;
    }
}