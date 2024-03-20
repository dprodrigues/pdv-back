import { Express } from "express";
import userFactory from "@/modules/user/user-factory";
import { routes } from "@/utils/routes";

const { user } = routes;

export default function (app: Express) {
  const userController = userFactory();

  app.get(user.base, (req, res) => userController.getAllUsers(req, res));
  app.get(user.id, userController.getUserById);
  app.post(user.base, (req, res) => userController.createUser(req, res));
  app.put(user.id, userController.updateUser);
  app.delete(user.id, userController.deleteUser);

  return app;
}
