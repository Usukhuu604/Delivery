import { Request, Response } from "express";
import { FoodOrderModel } from "../../models";

export const updateFoodOrderStatus = async (req: Request, res: Response) => {
  try {
    const { foodOrderId } = req.params;
    const { status } = req.body;

    const updatedOrder = await FoodOrderModel.findByIdAndUpdate(
      foodOrderId,
      { status },
      { new: true }
    )
      .populate("user", "email phoneNumber address")
      .populate("foodOrderItems.food");

    if (!updatedOrder) {
      res.status(404).send({
        message: "Food order not found",
      });
      return;
    }

    res.status(200).send({
      message: "Food order status updated successfully",
      order: updatedOrder,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error occurred while updating food order status",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
