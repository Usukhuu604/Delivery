import { Request, Response } from "express";
import { FoodOrderModel } from "../../models";
export const getFoodOrdersByUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const orders = await FoodOrderModel.find({ user: userId }).populate("foodOrderItems.food").sort({ createdAt: -1 });

    res.status(200).send({
      message: "User's food orders retrieved successfully",
      orders,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error occurred while retrieving user's food orders",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
