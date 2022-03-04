import { hash } from "bcrypt";
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
        drive_license,
        cpf,
        password,
    }: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByName(name);
        if (userAlreadyExists) throw new Error("User already exists!");

        const emailAlreadyExists = await this.usersRepository.findByEmail(
            email
        );
        if (emailAlreadyExists) throw new Error("User already exists!");

        const passwordHash = await hash(password, 8);

        await this.usersRepository.create({
            name,
            email,
            drive_license,
            cpf,
            password: passwordHash,
        });
    }
}

export { CreateUserUseCase };
