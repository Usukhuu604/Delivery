import { Request, Response } from "express";
import { FoodOrderModel, FoodModel, UserModel } from "../../models";

// Create food order
export const createFoodOrder = async (req: Request, res: Response): Promise<void> => {
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

// Get all food orders (admin only)
export const getAllFoodOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    const orders = await FoodOrderModel.find()
      .populate("user", "email phoneNumber address")
      .populate("foodOrderItems.food");

    res.status(200).json({
      message: "All food orders retrieved successfully",
      orders,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while retrieving food orders",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

// Get food orders by user
export const getFoodOrdersByUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;

    const orders = await FoodOrderModel.find({ user: userId })
      .populate("foodOrderItems.food")
      .sort({ createdAt: -1 });

    res.status(200).json({
      message: "User's food orders retrieved successfully",
      orders,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while retrieving user's food orders",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

// Update food order status
export const updateFoodOrderStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { foodOrderId } = req.params;
    const { status } = req.body;

    const updatedOrder = await FoodOrderModel.findByIdAndUpdate(
      foodOrderId,
      { status },
      { new: true }
    ).populate("user", "email phoneNumber address")
     .populate("foodOrderItems.food");

    if (!updatedOrder) {
      res.status(404).json({
        message: "Food order not found",
      });
      return;
    }

    res.status(200).json({
      message: "Food order status updated successfully",
      order: updatedOrder,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while updating food order status",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
