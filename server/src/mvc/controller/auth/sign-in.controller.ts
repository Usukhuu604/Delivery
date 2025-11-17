import { UserModel } from "../../models";
import { Request, Response } from "express";
import { decryptHash, generateNewToken } from "../../../utils";

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).send({ message: "Email and password are required" });
      return;
    }

    const user = await UserModel.findOne({ email }).select("+password");

    if (!user) {
      res.status(401).send({ message: "Incorrect email or password" });
      return;
    }

    const isPasswordCorrect = decryptHash(password, user.password);

    if (!isPasswordCorrect) {
      res.status(401).send({ message: "Incorrect email or password" });
      return;
    }

    const accessToken = generateNewToken({ userId: user._id });

    // Remove password from user object before sending
    const { password: _, ...userResponse } = user.toObject();

    res.status(200).send({ message: "Successful", token: accessToken, user: userResponse });
  } catch (error) {
    console.error("Error during sign-in", error);

    res.status(500).send({
      message: "Internal server error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
