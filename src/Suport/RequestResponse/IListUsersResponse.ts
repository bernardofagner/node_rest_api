import { UserEntity } from "../../Entities/User/User.entity";

export interface IListUsersResponse {
    Users: UserEntity[] | undefined;
}