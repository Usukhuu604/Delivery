import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

export const getAllFoodCategories = async (req: Request, res: Response) => {
  try {
    const categories = await FoodCategoryModel.find();

    res.status(200).send({
      message: "Food categories retrieved successfully",
      categories,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error occurred while retrieving food categories",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
