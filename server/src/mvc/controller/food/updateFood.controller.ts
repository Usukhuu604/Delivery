import { Request, Response } from "express";
import { FoodModel } from "../../models";

// Update food
export const updateFood = async (req: Request, res: Response) => {
  try {
    const { foodId } = req.params;
    const updateData = req.body;

    const updatedFood = await FoodModel.findByIdAndUpdate(foodId, updateData, {
      new: true,
    }).populate("category");

    if (!updatedFood) {
      res.status(404).json({
        message: "Food not found",
      });
      return;
    }

    res.status(200).json({
      message: "Food updated successfully",
      food: updatedFood,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while updating food",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
