import chalk from "chalk";
import express from "express";
import { connectDb } from "./db/connect";
import { errorHandlerMiddleware } from "./middleware/errorHandlerMiddleware";
import { notFoundMiddleware } from "./middleware/notFoundMiddleware";
import morgan from "morgan";
import "dotenv/config";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Siema");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT;

const start = async () => {
  try {
    await connectDb();
    console.log(chalk.green("CONNECTED TO THE DB"));
    app.listen(port, () => {
      console.log(`Server is listening on PORT: ${port}`);
    });
  } catch (error) {
    console.error(chalk.red("DB CONNECTION FAILED"));
    process.exit();
  }
};

start();
