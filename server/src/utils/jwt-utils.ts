import { sign, verify } from "jsonwebtoken";

const SECRETKEY = process.env.JWT_SECRET || "my_super_secret_jwt_key_2025";

if (!SECRETKEY) {
  throw new Error("JWT_SECRET environment variable is required!");
}

export const generateNewToken = (payload: object) => {
  return sign(payload, SECRETKEY, { expiresIn: "1h" });
};

export const verifyToken = (token: string) => {
  return verify(token, SECRETKEY);
};

// const token = generateNewToken({ userId: 123 });
// console.log("Generated Token:", token);

// try {
//   const decoded = verifyToken(token);
//   console.log("Decoded Payload:", decoded);
// } catch (err) {
//   console.error("Invalid token:", err);
// }
