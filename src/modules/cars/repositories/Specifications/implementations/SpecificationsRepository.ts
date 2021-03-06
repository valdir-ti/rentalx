import { getRepository, Repository } from "typeorm";

import { Specification } from "../../../entities/Specification";
import {
    ICreateSpecificationDTO,
    ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async list(): Promise<Specification[]> {
        const specifications = await this.repository
            .createQueryBuilder("specifications")
            .select([
                "specifications.id",
                "specifications.name",
                "specifications.description",
            ])
            .cache(process.env.APP_CACHE || true)
            .getMany();
        return specifications;
    }

    async create({
        name,
        description,
    }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            name,
            description,
        });

        await this.repository.save(specification);
    }

    async findByName(name: string): Promise<Specification> {
        const specification = this.repository.findOne({ name });
        return specification;
    }
}

export { SpecificationsRepository };
