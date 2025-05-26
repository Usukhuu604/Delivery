import { Request, Response } from "express";
import { FoodModel } from "../../models";

// Get foods by category
export const getFoodsByCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;

    const foods = await FoodModel.find({ category: categoryId }).populate("category");

    res.status(200).json({
      message: "Foods retrieved successfully",
      foods,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while retrieving foods",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

// Get all foods
export const getAllFoods = async (req: Request, res: Response) => {
  try {
    const foods = await FoodModel.find().populate("category");

    res.status(200).json({
      message: "All foods retrieved successfully",
      foods,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while retrieving foods",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

// Update food
export const updateFood = async (req: Request, res: Response) => {
  try {
    const { foodId } = req.params;
    const updateData = req.body;

    const updatedFood = await FoodModel.findByIdAndUpdate(
      foodId,
      updateData,
      { new: true }
    ).populate("category");

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

// Delete food
export const deleteFood = async (req: Request, res: Response)=> {
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
