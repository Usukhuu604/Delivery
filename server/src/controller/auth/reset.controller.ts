import { Request, Response } from "express";
import { UserModel } from "../../models";
import { sendPasswordResetRequest, verifyToken, generateNewToken, encryptHash } from "../../utils";

export const resetPassword = async (req: Request, res: Response) => {
  const { token, newPassword } = (await req.body) as { token: string; newPassword: string };

  try {
    const userId = verifyToken(token);
    console.log("User ID from token:", userId);

    if (!userId) {
      res.status(400).json({ message: "Invalid or expired token" });
      return;
    }

    const user = await UserModel.findById(userId);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // user.password = encryptHash(newPassword);
    user.password = newPassword;
    await user.save();

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
