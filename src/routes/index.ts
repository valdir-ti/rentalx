import express from "express";

import { categoriesRoutes } from "./categories.routes";

const routes = express();

routes.use("/categories", categoriesRoutes);

export { routes };
