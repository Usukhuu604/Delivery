"use client";

import { useState } from "react";
import { AlreadyHaveAnAccount } from "@/app/components/common/sign-upOrLogin/AlreadyHaveAnAccount";
import { CreateNewPassword } from "@/app/components/common/sign-upOrLogin/CreateNewPassword";
import { CreateYourAccountBanner } from "@/app/components/common/sign-upOrLogin/CreateYourAccountBanner";
import { EnterYourEmail } from "@/app/components/common/sign-upOrLogin/EnterYourEmail";
import axios from "axios";

export const SignUpCart = () => {
  const [page, setPage] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNextPage = async () => {
    if (page >= 1) {
      try {
        const response = await axios.post("http://localhost:8000/auth/sign-up", 
          {
            'email': email,
            'password': password,
          },
        );
        console.log('Signup successful:', response.data);
        setPage(0);
      } catch (error: any) {
        console.error("Signup failed:", error.response?.data?.message || error.message);
      }
    } else {
      setPage((page) => page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page <= 0) {
      setPage(0);
    } else {
      setPage((page) => page - 1);
    }
  };
  console.log(page);
  const Carts = [EnterYourEmail, CreateNewPassword][page] || EnterYourEmail;

  return (
    <div className="ml-20  w-[50vw] pr-25 grid gap-6">
      <CreateYourAccountBanner handlePreviousPage={handlePreviousPage} />
      <Carts
        handleNextPage={handleNextPage}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <AlreadyHaveAnAccount />
    </div>
  );
};
