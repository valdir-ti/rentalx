import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/Categories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/Categories/implementations/CategoriesRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/Specifications/implementations/SpecificationsRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/Specifications/ISpecificationsRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
);
