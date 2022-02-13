import express from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";

const routes = express();

routes.use("/categories", categoriesRoutes);
routes.use("/specifications", specificationsRoutes);

export { routes };
