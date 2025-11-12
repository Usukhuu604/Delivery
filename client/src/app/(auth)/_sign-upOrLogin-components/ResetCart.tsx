"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ResetPasswordForm } from "@/app/(auth)/_sign-upOrLogin-components/ResetPasswordForm";
import { ResetEmailInput } from "@/app/(auth)/_sign-upOrLogin-components/ResetEmailInput";
import { ResetBanner } from "@/app/(auth)/_sign-upOrLogin-components/ResetBanner";
import { BackToLogin } from "@/app/(auth)/_sign-upOrLogin-components/BackToLogin";
import { axiosDeliveryInstance } from "@/lib/axios-delivery-instance";

export const ResetCart = () => {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNextPage = async () => {
    if (page >= 1) {
      try {
        const response = await axiosDeliveryInstance.post(
          "/auth/reset-password",
          {
            email: email,
            password: password,
          }
        );

        console.log("Password reset successful:", response.data);
        router.push("/login");
        setPage(0);
        window.alert(
          "Password reset successful! Please log in with your new password."
        );
      } catch (error) {
        console.log(error);
        window.alert("Password reset failed. Please try again.");
      }
    } else {
      setPage((page) => page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page <= 0) {
      setPage(0);
      router.push("/login");
    } else {
      setPage((page) => page - 1);
    }
  };

  const Carts = [ResetEmailInput, ResetPasswordForm][page] || ResetEmailInput;

  return (
    <div className="ml-20 w-[50vw] pr-25 grid gap-6">
      <ResetBanner handlePreviousPage={handlePreviousPage} />

      <Carts
        handleNextPage={handleNextPage}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <BackToLogin />
    </div>
  );
};
