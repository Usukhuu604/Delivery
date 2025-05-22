import { Router } from "express";

import { verifyUserController, signupController, signIn } from "../controller/auth";

export const authRouter = Router();

authRouter.post("/sign-in", signIn);
authRouter.post("/sign-up", signupController);
authRouter.get("/verify-user", verifyUserController);
// authRouter.patch;
