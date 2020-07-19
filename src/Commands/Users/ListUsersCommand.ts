import { UserRepository } from "../../Repositories/Sql/UserRepository";
import { UserEntity } from "../../Entities/User/User.entity";
import { IListUsersResponse } from "../../Suport/RequestResponse/IListUsersResponse";
import { ListUsersRequest } from "../../Suport/RequestResponse/IListUsersRequest";

export class ListUsersCommand {

    private readonly usersRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.usersRepository = userRepository;
     }

    public async executeAsync(request: ListUsersRequest) {

        await this.usersRepository.HeathCkech();
        const allUsers: UserEntity[] = await this.usersRepository.getAll();

        const result: IListUsersResponse = {
            Users: allUsers
        };

        console.log("Users:", result)
        return result;
    }
}