import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

export const updateFoodCategory = async (req: Request, res: Response) => {
  try {
    const { foodCategoryId } = req.params;
    const updateData = req.body;

    const updatedCategory = await FoodCategoryModel.findByIdAndUpdate(foodCategoryId, updateData, { new: true });

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
