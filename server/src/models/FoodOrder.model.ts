import { Schema, model, models, Model } from "mongoose";

enum FoodOrderStatusEnum {
  PENDING = "PENDING",
  CANCELED = "CANCELED",
  DELIVERED = "DELIVERED",
}

type FoodOrderItem = {
  food: Schema.Types.ObjectId;
  quantity: number;
};

type FoodOrderType = {
  user: Schema.Types.ObjectId;
  totalPrice: number;
  foodOrderItems: FoodOrderItem[];
  status: FoodOrderStatusEnum;
  createdAt: Date;
  updatedAt: Date;
};

const FoodOrderItemSchema = new Schema<FoodOrderItem>({
  food: { type: Schema.Types.ObjectId, ref: "Food", required: true },
  quantity: { type: Number, required: true, min: 1 },
});

const FoodOrderSchema = new Schema<FoodOrderType>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    totalPrice: { type: Number, required: true },
    foodOrderItems: { type: [FoodOrderItemSchema], required: true },
    status: { type: String, enum: Object.values(FoodOrderStatusEnum), default: FoodOrderStatusEnum.PENDING },
  },
  { timestamps: true }
);

export const FoodOrderModel: Model<FoodOrderType> = models.FoodOrder || model("FoodOrder", FoodOrderSchema);
