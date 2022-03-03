import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../../repositories/Users/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({
        name,
        email,
        username,
        drive_license,
        cpf,
        password,
    }: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByName(name);

        if (userAlreadyExists) throw new Error("User already exists!");

        await this.usersRepository.create({
            name,
            email,
            username,
            drive_license,
            cpf,
            password,
        });
    }
}

export { CreateUserUseCase };
