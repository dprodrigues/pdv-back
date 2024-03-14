import { Express } from "express";
import { getAllUsers } from "./modules/user/user-controller";

export default function (app: Express) {
  app.get("/user", getAllUsers);
  // app.get("/user/:id", getUserById);
  // app.post("/user", createUser);
  // app.put("/user/:id", updateUser);
  // app.delete("/user/:id", deleteUser);

  return app;
}
