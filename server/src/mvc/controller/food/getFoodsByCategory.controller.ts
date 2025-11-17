import { Request, Response } from "express";
import { FoodModel } from "../../models";

export const getFoodsByCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;

    const foods = await FoodModel.find({ category: categoryId }).populate(
      "category"
    );

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
