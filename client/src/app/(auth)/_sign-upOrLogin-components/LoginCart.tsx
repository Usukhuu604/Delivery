"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginBanner } from "@/app/(auth)/_sign-upOrLogin-components/LoginBanner";
import { DontHaveAccount } from "@/app/(auth)/_sign-upOrLogin-components/DontHaveAccount";
import { LoginForm } from "@/app/(auth)/_sign-upOrLogin-components/LoginForm";
import { axiosDeliveryInstance } from "@/lib/axios-delivery-instance";

export const LoginCart = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axiosDeliveryInstance.post("/auth/sign-in", {
        email: email,
        password: password,
      });

      console.log("Login successful:", response.data);
      router.push("/");
      window.alert("Login successful!");
    } catch (error) {
      console.log(error);
      window.alert("Login failed. Please check your credentials.");
    }
  };

  const handlePreviousPage = () => {
    router.push("/");
  };

  return (
    <div className="ml-20 w-[50vw] pr-25 grid gap-6">
      <LoginBanner handlePreviousPage={handlePreviousPage} />
      <LoginForm
        handleNextPage={handleLogin}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <DontHaveAccount />
    </div>
  );
};
