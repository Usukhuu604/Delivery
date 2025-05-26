import { Router } from "express";
import { UserRoleEnum } from "../models";
import { createFoodCategory, getAllFoodCategories, updateFoodCategory, deleteFoodCategory } from "../controller/food-category";
import { authorization, authenticateUser } from "../middlewares";

export const foodCategoryRouter = Router();

// Get all food categories (public)
foodCategoryRouter.get("/", getAllFoodCategories);

// Create food category (admin only)
foodCategoryRouter.post("/", authenticateUser, authorization(UserRoleEnum.ADMIN), createFoodCategory);

// Update food category (admin only)
foodCategoryRouter.patch("/:foodCategoryId", authenticateUser, authorization(UserRoleEnum.ADMIN), updateFoodCategory);

// Delete food category (admin only)
foodCategoryRouter.delete("/:foodCategoryId", authenticateUser, authorization(UserRoleEnum.ADMIN), deleteFoodCategory);
