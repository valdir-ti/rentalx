import { SpecificationsRepository } from "../../../repositories/Specifications/implementations/SpecificationsRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const listSpecificationRepository = null;
const listSpecificationsUseCase = new ListSpecificationsUseCase(
    listSpecificationRepository
);
const listSpecificationsController = new ListSpecificationsController(
    listSpecificationsUseCase
);

export { listSpecificationsController };
