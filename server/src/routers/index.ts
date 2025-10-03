import { Router } from "express";
import {
  verifyUserController,
  signupController,
  signIn,
  resetPasswordRequest,
  resetPassword,
} from "../controller/auth";
import { UserRoleEnum } from "../models";
import {
  createFoodCategory,
  getAllFoodCategories,
  updateFoodCategory,
  deleteFoodCategory,
} from "../controller/food-category";
import { authorization, authenticateUser } from "../middlewares";
import {
  createFoodOrder,
  getAllFoodOrders,
  getFoodOrdersByUser,
  updateFoodOrderStatus,
} from "../controller/food-order";
import { getFoodsByCategory, getAllFoods, updateFood, deleteFood } from "../controller/food";

export const authRouter = Router();

authRouter.post("/sign-in", signIn);
authRouter.post("/sign-up", signupController);
authRouter.get("/verify-user", verifyUserController);
authRouter.post("/reset-password-request", resetPasswordRequest);
authRouter.patch("/reset-password", resetPassword);

export const foodCategoryRouter = Router();

foodCategoryRouter.get("/get-all-categories", getAllFoodCategories);
foodCategoryRouter.post("/create-category", authenticateUser, authorization(UserRoleEnum.ADMIN), createFoodCategory);
foodCategoryRouter.patch(
  "/update-category/:foodCategoryId",
  authenticateUser,
  authorization(UserRoleEnum.ADMIN),
  updateFoodCategory
);
foodCategoryRouter.delete(
  "/delete-category/:foodCategoryId",
  authenticateUser,
  authorization(UserRoleEnum.ADMIN),
  deleteFoodCategory
);

export const foodOrderRouter = Router();

foodOrderRouter.post("/", authenticateUser, createFoodOrder);
foodOrderRouter.get("/:userId", authenticateUser, getFoodOrdersByUser);
foodOrderRouter.get("/", authenticateUser, authorization(UserRoleEnum.ADMIN), getAllFoodOrders);
foodOrderRouter.patch("/:foodOrderId", authenticateUser, authorization(UserRoleEnum.ADMIN), updateFoodOrderStatus);

export const foodRouter = Router();

foodRouter.get("/:categoryId", getFoodsByCategory);
foodRouter.get("/", getAllFoods);
foodRouter.patch("/:foodId", authenticateUser, authorization(UserRoleEnum.ADMIN), updateFood);
foodRouter.delete("/:foodId", authenticateUser, authorization(UserRoleEnum.ADMIN), deleteFood);
