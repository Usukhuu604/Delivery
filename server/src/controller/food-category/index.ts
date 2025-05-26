import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

// Get all food categories
export const getAllFoodCategories = async (req: Request, res: Response): Promise<void> => {
  try {
    const categories = await FoodCategoryModel.find();

    res.status(200).json({
      message: "Food categories retrieved successfully",
      categories,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while retrieving food categories",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

// Create food category
export const createFoodCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const foodCategoryData = req.body;

    const newFoodCategory = await FoodCategoryModel.create(foodCategoryData);

    res.status(201).json({
      message: "Food category created successfully",
      newFoodCategory,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while creating the food category",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

// Update food category
export const updateFoodCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const { foodCategoryId } = req.params;
    const updateData = req.body;

    const updatedCategory = await FoodCategoryModel.findByIdAndUpdate(
      foodCategoryId,
      updateData,
      { new: true }
    );

    if (!updatedCategory) {
      res.status(404).json({
        message: "Food category not found",
      });
      return;
    }

    res.status(200).json({
      message: "Food category updated successfully",
      category: updatedCategory,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while updating food category",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

// Delete food category
export const deleteFoodCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const { foodCategoryId } = req.params;

    const deletedCategory = await FoodCategoryModel.findByIdAndDelete(foodCategoryId);

    if (!deletedCategory) {
      res.status(404).json({
        message: "Food category not found",
      });
      return;
    }

    res.status(200).json({
      message: "Food category deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while deleting food category",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
