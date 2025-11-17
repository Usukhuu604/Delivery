"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginBanner } from "@/app/(auth)/_sign-upOrLogin-components/LoginBanner";
import { DontHaveAccount } from "@/app/(auth)/_sign-upOrLogin-components/DontHaveAccount";
import { LoginForm } from "@/app/(auth)/_sign-upOrLogin-components/LoginForm";
import { useUserContext } from "@/providers/UserProvider";

export const LoginCart = () => {
  const router = useRouter();
  const { userLoginHandler } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await userLoginHandler(email, password);
      router.push("/");
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Login failed. Please check your credentials.";
      window.alert(errorMessage);
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
