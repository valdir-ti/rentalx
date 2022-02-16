import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/Categories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/Categories/implementations/CategoriesRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);
