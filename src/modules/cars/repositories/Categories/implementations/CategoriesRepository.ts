import { getRepository, Repository } from "typeorm";

import { Category } from "../../../entities/Category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository
            .createQueryBuilder("categories")
            .select([
                "categories.id",
                "categories.name",
                "categories.description",
            ])
            .cache(process.env.APP_CACHE || true)
            .getMany();
        return categories;
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            name,
            description,
        });

        await this.repository.save(category);
    }

    async findByName(name: string): Promise<Category> {
        const category = await this.repository.findOne({ name });
        return category;
    }
}

export { CategoriesRepository };
