import { Request, Response } from "express";
import { UserModel } from "../../models";
import { encryptHash, generateNewToken, sendVerificationLink } from "../../../utils";

type UserBodyType = {
  email: string;
  password: string;
};

export const signupController = async (req: Request, res: Response) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const { email, password } = req.body as UserBodyType;

  try {
    if (!email || !password) {
      res.status(400).json({
        message: "Email and password are required",
      });
      return;
    }

    if (!emailRegex.test(email)) {
      res.status(400).json({
        message: "Invalid email format",
      });
      return;
    }

    if (password.length < 6) {
      res.status(400).json({
        message: "Password must be at least 6 characters",
      });
      return;
    }

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      res.status(400).json({
        message: "User with this email already exists",
      });
      return;
    }

    const hashedPassword = encryptHash(password);

    const newUser = await UserModel.create({
      email,
      password: hashedPassword,
    });

    const token = generateNewToken({ userId: newUser._id });

    // Send verification email (don't block response if it fails)
    sendVerificationLink(`${req.protocol}://${req.get("host")}/auth/verify-user?token=${token}`, email).catch(
      (emailError) => {
        console.error("Failed to send verification email:", emailError);
      }
    );

    res.status(201).json({
      message: "Account created successfully! Please check your email to verify your account.",
      userId: newUser._id,
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({
      message: "An error occurred during signup",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
