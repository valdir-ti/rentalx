import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { User } from "../../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async list(): Promise<User[]> {
        const users = await this.repository.find();
        return users;
    }

    async create({
        name,
        username,
        email,
        drive_license,
        password,
        cpf,
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            username,
            email,
            drive_license,
            password,
            cpf,
        });

        await this.repository.save(user);
    }

    async findByName(name: string): Promise<User> {
        const user = await this.repository.findOne({ name });
        return user;
    }
}

export { UsersRepository };
