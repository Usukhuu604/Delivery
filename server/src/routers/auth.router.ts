import { Router } from "express";
import { signupController } from "../controller/auth/signup.controller";

export const authRouter = Router();

authRouter.post("/sign-up", signupController);
