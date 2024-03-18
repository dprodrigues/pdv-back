import { Express } from "express";
import UserController from "@/modules/user/user-controller";
import { routes } from "@/utils/routes";

const userController = new UserController();
const { user } = routes;

export function userHandler(app: Express) {
  app.get(user.base, userController.getAllUsers);
  app.get(user.id, userController.getUserById);
  app.post(user.base, userController.createUser);
  app.put(user.id, userController.updateUser);
  app.delete(user.id, userController.deleteUser);
}
