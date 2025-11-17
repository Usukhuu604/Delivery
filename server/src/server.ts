import express from "express";
import { connectDatabase } from "./db";
import { configDotenv } from "dotenv";
import {
  authRouter,
  foodCategoryRouter,
  foodRouter,
  foodOrderRouter,
} from "./mvc/routers";
import cors from "cors";

configDotenv();
connectDatabase();

const app = express();
const port = 8000;

app.use(
  cors({
    origin: process.env.FRONTEND_ENDPOINT || "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.use("/auth", authRouter);
app.use("/food", foodRouter);
app.use("/food-order", foodOrderRouter);
app.use("/food-category", foodCategoryRouter);

app.listen(port, () => console.log(`http://localhost:${port}`));
