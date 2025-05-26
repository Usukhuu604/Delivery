import { UserModel } from "../../models";
import { Request, Response } from "express";
import { sendPasswordResetRequest, verifyToken, generateNewToken } from "../../utils";

export const resetPasswordRequest = async (req: Request, res: Response) => {
  const { email } = (await req.body) as { email: string };

  const isVerified = (await UserModel.findOne({ email, isVerified: true })) ? true : false;

  const user = await UserModel.findOne({ email });

  try {
    const user = await UserModel.findOne({ email });

    if (!user || !isVerified) {
      res.status(404).json({ message: "User not FOUND or User must be VERIFIED!" });
      return;
    }

    const token = generateNewToken({ userId: user._id });

    await sendPasswordResetRequest(`${req.protocol}://${req.get("host")}/auth/reset-password-request?token=${token}`, email);

    res.status(200).json({ message: "Reset password email sent" });
    return;
  } catch (error) {
    console.error("Error processing reset password request:", error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};
