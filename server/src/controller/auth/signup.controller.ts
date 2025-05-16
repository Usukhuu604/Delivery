import { Request, Response } from "express";
import { UserModel } from "../../models/user.model";
import { encryptHash } from "../../utils";

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

  const existingUser = await UserModel.findOne({ email });

  if (existingUser) {
    res.status(400).send({ message: "User exists" });
  }

  const hashedPassword = encryptHash(password);

  await UserModel.create({
    email,
    password: hashedPassword,
  });

  res.status(201).send({ message: "Success" });
};
