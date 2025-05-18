import { Router } from "express";
import { signupController } from "../controller/auth/signup.controller";
// import { verifyUserController } from "../controller/auth/verify.controller";

export const authRouter = Router();

authRouter.post("/sign-up", signupController);
// authRouter.get("verify-user", verifyUserController);
