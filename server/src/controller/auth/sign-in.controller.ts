import { UserModel } from "../../models";
import { Request, Response } from "express";
import { decryptHash, generateNewToken } from "../../utils";

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const { password, email } = req.body;
    const user = await UserModel.findOne({ email }).select("+password");

    if (!user) {
      res.status(401).json({ message: "Incorrect email or password" });
      return;
    }

    const isPasswordCorrect = decryptHash(password, user.password);

    if (!isPasswordCorrect) {
      res.status(401).json({ message: "Incorrect email or password" });
      return;
    }

    const accessToken = generateNewToken({ userId: user._id });

    res.status(200).json({ message: "Succesful", token: accessToken, user });
  } catch (error) {
    console.error("Error during sing-in", error);
    res.status(500).json({
      message: "Interval server error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
