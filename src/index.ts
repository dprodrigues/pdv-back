import express = require("express");
import dotenv = require("dotenv");
import router from "./router";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

const appRouter = router(app);

appRouter.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
