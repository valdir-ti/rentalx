import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/Users/CreateUser/CreateUserController";
import { ListUsersController } from "../modules/accounts/useCases/Users/ListUsers/ListUsersController";

const usersRoutes = Router();

const listUsersController = new ListUsersController();
usersRoutes.get("/", listUsersController.handle);

const createUserController = new CreateUserController();
usersRoutes.post("/", createUserController.handle);

export { usersRoutes };
