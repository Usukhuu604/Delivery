import { Request, Response } from "express";

export const refreshUserController = async (req: Request, res: Response) => {
  const { _id } = req.body;

  const refreshToken = "";

  res.status(200).send({ refreshToken });
};
