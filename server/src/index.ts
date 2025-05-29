import express from "express";
import { connectDatabase } from "./database";
import { configDotenv } from "dotenv";
import { authRouter, foodCategoryRouter, foodRouter, foodOrderRouter } from "./routers";
import cors from "cors";

const app = express();

configDotenv();
connectDatabase();

const port = 8000;

app.use(cors({
  origin: process.env.FRONTEND_ENDPOINT || "http://localhost:3000",
  credentials: true
}));
app.use(express.json());

app.use("/auth", authRouter);
app.use("/food-category", foodCategoryRouter);
app.use("/food", foodRouter);
app.use("/food-order", foodOrderRouter);

app.listen(port, () => console.log(`http://localhost:${port}`));
