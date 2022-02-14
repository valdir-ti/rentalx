import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/Specification/CreateSpecification";
import { listSpecificationsController } from "../modules/cars/useCases/Specification/ListSpecifications";

const specificationsRoutes = Router();

specificationsRoutes.get("/", (request, response) => {
    return listSpecificationsController.handle(request, response);
});

specificationsRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
});

export { specificationsRoutes };
