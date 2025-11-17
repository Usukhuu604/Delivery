import { configDotenv } from "dotenv";
import { createTransport } from "nodemailer";

configDotenv();

const { USER_EMAIL, USER_PASS } = process.env;

if (!USER_EMAIL || !USER_PASS) {
  throw new Error(
    "USER_EMAIL and USER_PASS must be set in environment variables"
  );
}

const transport = createTransport({
  service: "gmail",
  auth: {
    user: USER_EMAIL,
    pass: USER_PASS,
  },
});

export const sendVerificationLink = async (
  URLVerification: string,
  email: string
) => {
  try {
    await transport.sendMail({
      subject: "Verify your email address",
      from: USER_EMAIL,
      to: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1>Welcome to our service!</h1>
          <p>Click the button below to verify your email address:</p>
          <a 
            href="${URLVerification}" 
            style="display:inline-block;padding:12px 24px;background-color:#4CAF50;color:#fff;text-decoration:none;border-radius:5px;margin:20px 0;"
          >
            Verify Email
          </a>
          <p style="color:#666;font-size:12px;">
            If you didn't create an account, you can safely ignore this email.
          </p>
        </div>
      `,
    });
    console.log(`Verification email sent to ${email}`);
  } catch (error) {
    console.error("Failed to send verification email:", error);
    throw error;
  }
};

////reset password
// export const sendPasswordResetRequest = async (
//   URLVerification: string,
//   email: string
// ) => {
//   try {
//     await transport.sendMail({
//       subject: "Reset your password",
//       from: USER_EMAIL,
//       to: email,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <h1>Password Reset Request</h1>
//           <p>We received a request to reset your password. Click the button below to proceed:</p>
//           <a
//             href="${URLVerification}"
//             style="display:inline-block;padding:12px 24px;background-color:#4CAF50;color:#fff;text-decoration:none;border-radius:5px;margin:20px 0;"
//           >
//             Reset Password
//           </a>
//           <p style="color:#666;font-size:12px;">
//             If you didn't request a password reset, you can safely ignore this email.
//           </p>
//           <p style="color:#666;font-size:12px;">
//             This link will expire in 1 hour.
//           </p>
//         </div>
//       `,
//     });
//     console.log(`Password reset email sent to ${email}`);
//   } catch (error) {
//     console.error("Failed to send password reset email:", error);
//     throw error;
//   }
// };
