import { Router } from "express";
import { authenticateUser, authorization } from "../middlewares";
import { createFoodCategory } from "../controller";

export const foodCategoryRouter = Router();

foodCategoryRouter.route("/").post(authenticateUser, authorization(), createFoodCategory);
