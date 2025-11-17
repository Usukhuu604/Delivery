import { UserModel } from "../../models";
import { Request, Response } from "express";
import { generateNewToken } from "../../../utils";

export const resetPasswordRequest = async (req: Request, res: Response) => {
  const { email } = req.body as { email: string };

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      res.status(404).send({ message: "User not found" });
      return;
    }

    if (!user.isVerified) {
      res
        .status(403)
        .send({ message: "User must be verified to reset password" });
      return;
    }

    const token = generateNewToken({ userId: user._id });

    // await sendPasswordResetRequest(
    //   `${req.protocol}://${req.get(
    //     "host"
    //   )}/auth/reset-password-request?token=${token}`,
    //   email
    // );

    res.status(200).send({ message: "Reset password email sent", token });
  } catch (error) {
    console.error("Error processing reset password request:", error);
    res.status(500).send({
      message: "Error occurred while processing reset password request",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
