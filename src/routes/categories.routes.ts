import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/Category/CreateCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/Category/ImportCategory/ImportCategoryController";
import { ListCategoriesController } from "../modules/cars/useCases/Category/ListCategories/ListCategoriesController";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

const listCategoriesController = new ListCategoriesController();
categoriesRoutes.get("/", listCategoriesController.handle);

const createCategoryController = new CreateCategoryController();
categoriesRoutes.post("/", createCategoryController.handle);

const importCategoryController = new ImportCategoryController();
categoriesRoutes.post(
    "/import",
    upload.single("file"),
    importCategoryController.handle
);

export { categoriesRoutes };
