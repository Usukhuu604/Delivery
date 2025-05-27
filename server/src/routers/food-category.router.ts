import { Router } from "express";
import { UserRoleEnum } from "../models";
import { createFoodCategory, getAllFoodCategories, updateFoodCategory, deleteFoodCategory } from "../controller/food-category";
import { authorization, authenticateUser } from "../middlewares";

export const foodCategoryRouter = Router();

foodCategoryRouter.get("/get-all-categories", getAllFoodCategories);
foodCategoryRouter.post("/create-category", authenticateUser, authorization(UserRoleEnum.ADMIN), createFoodCategory);
foodCategoryRouter.patch("/update-category/:foodCategoryId", authenticateUser, authorization(UserRoleEnum.ADMIN), updateFoodCategory);
foodCategoryRouter.delete("/delete-category/:foodCategoryId", authenticateUser, authorization(UserRoleEnum.ADMIN), deleteFoodCategory);
