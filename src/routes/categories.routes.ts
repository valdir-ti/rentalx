import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/Category/CreateCategory/CreateCategoryController";
import { importCategoryController } from "../modules/cars/useCases/Category/ImportCategory";
import listCategoriesController from "../modules/cars/useCases/Category/ListCategories";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController().handle(request, response);
});

const createCategoryController = new CreateCategoryController();
categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
