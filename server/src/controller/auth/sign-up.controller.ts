import { Request, Response } from "express";
import { UserModel } from "../../models";
import { encryptHash, sendVerificationLink, genereateNewToken } from "../../utils";

type UserBody = {
  email: string;
  password: string;
};

export const signupController = async (req: Request, res: Response) => {
  const { email, password } = req.body as UserBody;
  const hashedPassword = encryptHash(password);

  if (!email || !password) {
    res.status(400).send({ message: "Email or password bhgui bna" });
    return;
  }

  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    res.status(400).send({ message: "User exists" });
    return;
  }

  // create
  const { _id } = await UserModel.create({
    email,
    password: hashedPassword,
  });

  const token = genereateNewToken({ userId: _id });

  await sendVerificationLink(`${req.protocol}://${req.get("host")}`, email);

  res.status(201).send({ message: "Success", token });
};
