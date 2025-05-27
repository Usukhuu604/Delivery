import { Request, Response } from "express";
import { FoodModel } from "../../models";

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
