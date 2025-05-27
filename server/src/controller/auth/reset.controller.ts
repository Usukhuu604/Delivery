import { UserModel } from "../../models";
import { Request, Response } from "express";
import { verifyToken, encryptHash } from "../../utils";

export const resetPassword = async (req: Request, res: Response) => {
  const token = String(req.query.token) || req.body.token;

  const { newPassword } = req.body as { newPassword: string };

  try {
    const decodedToken = verifyToken(token) as { userId: string };

    if (!decodedToken || !decodedToken.userId) {
      res.status(400).send({ message: "Invalid or expired token" });
      return;
    }

    const user = await UserModel.findById(decodedToken.userId);
    if (!user) {
      res.status(404).send({ message: "User not found" });
      return;
    }

    user.password = encryptHash(newPassword);
    await user.save();

    res.status(200).send({ message: "Password reseted successfully" });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).send({
      message: "Error occurred while resetting password",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
