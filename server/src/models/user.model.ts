import { Schema, model, Model, models } from "mongoose";

enum UserRoleEnum {
  USER = "USER",
  ADMIN = "ADMIN",
}

type UserSchemaType = {
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  role: UserRoleEnum;
  orderedFoods: Schema.Types.ObjectId[];
  ttl: Date;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const UserSchema = new Schema<UserSchemaType>(
  {
    email: { type: String, required: true, unique: true, minlength: 5, maxlength: 30, trim: true },
    password: { type: String, required: true, minlength: 6, trim: true },
    address: { type: String, default: "", trim: true },
    isVerified: { type: Boolean, default: false },
    orderedFoods: [{ type: Schema.Types.ObjectId, ref: "FoodOrder", required: true }],
    phoneNumber: { type: String, unique: true, trim: true, default: "" },
    role: { type: String, enum: Object.values(UserRoleEnum), default: UserRoleEnum.USER },
    ttl: { type: Date, default: () => Date.now() + 24 * 60 * 60 * 1000 },
    createdAt: { type: Date, immutable: true, default: () => Date.now() },
    updatedAt: { type: Date, default: () => Date.now() },
  },
  { timestamps: true }
);

export const UserModel: Model<UserSchemaType> = models["User"] || model("User", UserSchema);
