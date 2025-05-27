import { Router } from "express";
import { UserRoleEnum } from "../models";
import { createFoodOrder, getAllFoodOrders, getFoodOrdersByUser, updateFoodOrderStatus } from "../controller/food-order";
import { authorization, authenticateUser } from "../middlewares";

export const foodOrderRouter = Router();

foodOrderRouter.post("/", authenticateUser, createFoodOrder);
foodOrderRouter.get("/:userId", authenticateUser, getFoodOrdersByUser);
foodOrderRouter.get("/", authenticateUser, authorization(UserRoleEnum.ADMIN), getAllFoodOrders);
foodOrderRouter.patch("/:foodOrderId", authenticateUser, authorization(UserRoleEnum.ADMIN), updateFoodOrderStatus);
