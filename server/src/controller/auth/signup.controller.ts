import { Request, Response } from "express";
import { UserModel } from "../../models/user.model";

type UserBody = {
  email: string;
  password: string;
};

export const signupController = async (req: Request, res: Response) => {
  const { email, password } = req.body as UserBody;

  if (!email || !password) {
    res.status(400).send({ message: "Email or password bhgui bna" });
    return;
  }

  // const existingUser = await UserModel.findOne({ email });

  await UserModel.create({
    email,
    password,
  });

  res.status(201).send({ message: "Success" });
};
