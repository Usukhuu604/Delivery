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

export const sendVerificationLink = async (URLVerifation: string, email: string) => {
  await transport.sendMail({
    subject: "Verify your email address",
    from: USER_EMAIL,
    to: email,
    html: `
      <h1>Welcome to our service.</h1>
      <p>Click the link below to verify your email address: 
        <button style="border:1px solid white; background-color:transparent">
          <a href="${URLVerifation}" style="display:inline-block;padding:5px 10px;background-color:#4CAF50;color:#fff;text-decoration:none;border-radius:5px;">Verify</a>
        </button>
      </p>
    `,
  });
};
