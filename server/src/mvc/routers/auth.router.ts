import { Router } from "express";
import {
  verifyUserController,
  signupController,
  signIn,
  resetPasswordRequest,
  resetPassword,
  refreshUserController,
} from "../controller/auth";

export const authRouter = Router();

authRouter.post("/sign-in", signIn);
authRouter.post("/sign-up", signupController);
authRouter.get("/verify-user", verifyUserController);
authRouter.post("/reset-password-request", resetPasswordRequest);
authRouter.patch("/reset-password", resetPassword);
authRouter.get("/refresh-user", refreshUserController);
