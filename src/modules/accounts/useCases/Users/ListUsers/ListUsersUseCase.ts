import { inject, injectable } from "tsyringe";

import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/Users/IUsersRepository";

@injectable()
class ListUsersUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute(): Promise<User[]> {
        const users = await this.usersRepository.list();
        return users;
    }
}

export { ListUsersUseCase };
