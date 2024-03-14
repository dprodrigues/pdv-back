import { Express } from "express";

module.exports = (app: Express) => {
  app.get("/", (_, res) => {
    res.send("Hello World!");
  });

  return app;
};
