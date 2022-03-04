import { Router } from "express";

import { AuthenticateUserController } from "../modules/accounts/useCases/Users/AuthenticateUser/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
authenticateRoutes.post("/session", authenticateUserController.handle);

export { authenticateRoutes };
