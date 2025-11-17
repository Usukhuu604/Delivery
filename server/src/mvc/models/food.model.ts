import { Schema, model, models, Model } from "mongoose";

type FoodType = {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  category: Schema.Types.ObjectId;
};

const FoodSchema = new Schema<FoodType>(
  {
    foodName: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "FoodCategory", required: true },
  },
  { timestamps: true }
);

export const FoodModel: Model<FoodType> = models["Food"] || model("Food", FoodSchema);
