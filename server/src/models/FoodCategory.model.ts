import { Schema, model, models, Model } from "mongoose";

type FoodCategoryType = {
  categoryName: string;
  createdAt: Date;
  updatedAt: Date;
};

const FoodCategorySchema = new Schema<FoodCategoryType>(
  {
    categoryName: { type: String, required: true, unique: true, trim: true },
  },
  { timestamps: true }
);

export const FoodCategoryModel: Model<FoodCategoryType> =
  models.FoodCategory || model("FoodCategory", FoodCategorySchema);
