import { Router } from "express";
import { UserRoleEnum } from "../models";
import { createFoodOrder, getAllFoodOrders, getFoodOrdersByUser, updateFoodOrderStatus } from "../controller/food-order";
import { authorization, authenticateUser } from "../middlewares";

export const foodOrderRouter = Router();

// Create food order (authenticated users only)
foodOrderRouter.post("/", authenticateUser, createFoodOrder);

// Get all food orders (admin only)
foodOrderRouter.get("/", authenticateUser, authorization(UserRoleEnum.ADMIN), getAllFoodOrders);

// Get food orders by user (authenticated users only)
foodOrderRouter.get("/:userId", authenticateUser, getFoodOrdersByUser);

// Update food order status (admin only)
foodOrderRouter.patch("/:foodOrderId", authenticateUser, authorization(UserRoleEnum.ADMIN), updateFoodOrderStatus);
