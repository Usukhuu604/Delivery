import { sign, verify } from "jsonwebtoken";

const SECRETKEY = "my_screen"; //

export const genereateNewToken = (payload: object) => {
  return sign(payload, SECRETKEY, { expiresIn: "1h" });
};

export const verifyToken = (token: string) => {
  return verify(token, SECRETKEY);
};
