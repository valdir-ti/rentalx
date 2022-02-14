import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/Specifications/implementations/SpecificationsRepository";
import { createSpecificationController } from "../modules/cars/useCases/CreateSpecification";

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.get("/", (request, response) => {
  const allSpecifications = specificationsRepository.list();
  return response.status(200).json(allSpecifications);
});

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { specificationsRoutes };
