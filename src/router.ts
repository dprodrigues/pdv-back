import { Express } from "express";
import { userHandler } from "@/modules/user";

export default function (app: Express) {
  userHandler(app);

  return app;
}
