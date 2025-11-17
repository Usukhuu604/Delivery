// Davuu erhtei esehiig shalgah uuregtei

import { Request, Response, NextFunction } from "express";

export const authorization = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body;

    try {
      if (roles.includes(user.role)) {
        next();
      } else {
        res.status(403).json({
          message: "You do not have permission to perform this action",
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "An error occurred",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  };
};
