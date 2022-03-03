import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";

interface IUsersRepository {
    findByName(name: string): Promise<User>;
    list(): Promise<User[]>;
    create(data: ICreateUserDTO): Promise<void>;
}

export { ICreateUserDTO, IUsersRepository };
