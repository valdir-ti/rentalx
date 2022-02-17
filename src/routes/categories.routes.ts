import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/Category/CreateCategory/CreateCategoryController";
import { importCategoryController } from "../modules/cars/useCases/Category/ImportCategory";
import { ListCategoriesController } from "../modules/cars/useCases/Category/ListCategories/ListCategoriesController";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

const listCategoriesController = new ListCategoriesController();
categoriesRoutes.get("/", listCategoriesController.handle);

const createCategoryController = new CreateCategoryController();
categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
