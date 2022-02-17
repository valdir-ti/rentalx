import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/Specification/CreateSpecification/CreateSpecificationController";
import { listSpecificationsController } from "../modules/cars/useCases/Specification/ListSpecifications";

const specificationsRoutes = Router();

specificationsRoutes.get("/", (request, response) => {
    return listSpecificationsController.handle(request, response);
});

const createSpecificationController = new CreateSpecificationController();
specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };
