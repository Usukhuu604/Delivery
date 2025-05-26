import { Request, Response } from "express";
import { UserModel } from "../../models";
import { sendPasswordResetRequest, verifyToken, generateNewToken, encryptHash } from "../../utils";

export const resetPassword = async (req: Request, res: Response): Promise<void> => {
  const { token, newPassword } = req.body as { token: string; newPassword: string };

  try {
    const decodedToken = verifyToken(token) as { userId: string };
    
    if (!decodedToken || !decodedToken.userId) {
      res.status(400).json({ message: "Invalid or expired token" });
      return;
    }

    const user = await UserModel.findById(decodedToken.userId);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // Hash the new password before saving
    user.password = encryptHash(newPassword);
    await user.save();

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ 
      message: "Error occurred while resetting password",
      error: error instanceof Error ? error.message : "Unknown error"
    });
  }
};
