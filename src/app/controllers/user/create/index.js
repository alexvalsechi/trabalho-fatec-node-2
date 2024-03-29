import { UserModel } from "../../../models/user.model.js";
import {UserService} from "../../../services/user.service.js";
import { CreateUserController } from "./create.controller.js";

const userService = new UserService(UserModel);
const userController = new CreateUserController(userService);

export {userController};


