import { Model, model, models, Schema } from "mongoose";

const FoodOrderItemSchema = new Schema(
  {
    food: { type: Schema.Types.ObjectId, required: true, ref: "Food" },
    quantity: { type: Number, required: true },
  },
  { _id: false }
);

const FoodOrder = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  totalPrice: { type: Number, required: true },

  foodOrderItems: { type: [FoodOrderItemSchema], required: true },
});
