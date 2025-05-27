import { Request, Response } from "express";
import { FoodModel } from "../../models";
import { FoodOrderModel } from "../../models";
import { UserModel } from "../../models";

export const createFoodOrder = async (req: Request, res: Response) => {
  try {
    const { foodOrderItems } = req.body;
    const { user } = req.body; // From authenticateUser middleware

    // Calculate total price
    let totalPrice = 0;
    for (const item of foodOrderItems) {
      const food = await FoodModel.findById(item.food);
      if (!food) {
        res.status(404).json({
          message: `Food with id ${item.food} not found`,
        });
        return;
      }
      totalPrice += food.price * item.quantity;
    }

    const newOrder = await FoodOrderModel.create({
      user: user._id,
      totalPrice,
      foodOrderItems,
    });

    // Update user's orderedFoods array
    await UserModel.findByIdAndUpdate(user._id, {
      $push: { orderedFoods: newOrder._id },
    });

    res.status(201).json({
      message: "Food order created successfully",
      order: newOrder,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while creating food order",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
