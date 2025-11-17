import { Request, Response } from "express";
import { FoodOrderModel } from "../../models";

export const getAllFoodOrders = async (req: Request, res: Response) => {
  try {
    const orders = await FoodOrderModel.find()
      .populate("user", "email phoneNumber address")
      .populate("foodOrderItems.food");

    res.status(200).send({
      message: "All food orders retrieved successfully",
      orders,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error occurred while retrieving food orders",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
