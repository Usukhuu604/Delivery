import { Router } from "express";
import { UserRoleEnum } from "../models";
import { createFoodCategory } from "../controller/food-category";
import { authorization, authenticateUser } from "../middlewares";

export const foodCategoryRouter = Router();

foodCategoryRouter.route("/").post(authenticateUser, authorization(UserRoleEnum.ADMIN), createFoodCategory);
