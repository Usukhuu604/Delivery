import express from "express";
import { connectDatabase } from "./database";
import { configDotenv } from "dotenv";
import { authRouter, foodCategoryRouter } from "./routers";

const app = express();

configDotenv();
connectDatabase();

const port = 8000;

app.use(express.json());

app.use("/auth", authRouter);
app.use("/food-category", foodCategoryRouter);

app.listen(port, () => console.log(`http://localhost:${port}`));
