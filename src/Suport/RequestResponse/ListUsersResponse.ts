import { UserEntity } from "../../Entities/User/User.entity";

export class ListUsersResponse {
    Users: UserEntity[] | undefined;
}