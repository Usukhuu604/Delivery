import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

export const deleteFoodCategory = async (req: Request, res: Response) => {
  try {
    const { foodCategoryId } = req.params;

    const deletedCategory = await FoodCategoryModel.findByIdAndDelete(foodCategoryId);

    if (!deletedCategory) {
      res.status(404).send({
        message: "Food category not found",
      });
      return;
    }

    res.status(200).send({
      message: "Food category deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      message: "Error occurred while deleting food category",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
