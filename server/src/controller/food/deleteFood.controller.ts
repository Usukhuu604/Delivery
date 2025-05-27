import { Request, Response } from "express";
import { FoodModel } from "../../models";

// Delete food
export const deleteFood = async (req: Request, res: Response) => {
  try {
    const { foodId } = req.params;

    const deletedFood = await FoodModel.findByIdAndDelete(foodId);

    if (!deletedFood) {
      res.status(404).json({
        message: "Food not found",
      });
      return;
    }

    res.status(200).json({
      message: "Food deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while deleting food",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
