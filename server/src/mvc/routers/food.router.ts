import { Router } from "express";
import { UserRoleEnum } from "../models";
import {
  getFoodsByCategory,
  getAllFoods,
  updateFood,
  deleteFood,
} from "../controller/food";
import { authorization, authenticateUser } from "../middlewares";

export const foodRouter = Router();

foodRouter.get("/:categoryId", getFoodsByCategory);
foodRouter.get("/", getAllFoods);
foodRouter.patch(
  "/:foodId",
  authenticateUser,
  authorization(UserRoleEnum.ADMIN),
  updateFood
);
foodRouter.delete(
  "/:foodId",
  authenticateUser,
  authorization(UserRoleEnum.ADMIN),
  deleteFood
);
