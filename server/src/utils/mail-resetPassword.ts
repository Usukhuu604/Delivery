import { configDotenv } from "dotenv";
import { createTransport } from "nodemailer";

configDotenv();

const { USER_EMAIL, USER_PASS } = process.env;

const transport = createTransport({
  service: "gmail",
  auth: {
    user: USER_EMAIL,
    pass: USER_PASS,
  },
});

export const sendPasswordResetRequest = async (URLVerification: string, email: string) => {
  await transport.sendMail({
    subject: "Reset your password address",
    from: USER_EMAIL,
    to: email,
    html: `
      <h1>Welcome to our service.</h1>
      <p>Click the link below to reset your password: <button style="border:1px solid white; background-color:transparent"><a href="${URLVerification}" style="display:inline-block;padding:5px 10px;background-color:#4CAF50;color:#fff;text-decoration:none;border-radius:5px;">Reset Password</a></button></p>
    `,
  });
};
