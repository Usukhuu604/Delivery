"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CreateYourAccountBanner } from "@/app/(user)/_sign-upOrLogin-components/CreateYourAccountBanner";
import { AlreadyHaveAnAccount } from "@/app/(user)/_sign-upOrLogin-components/AlreadyHaveAnAccount";
import { CreateNewPassword } from "@/app/(user)/_sign-upOrLogin-components/CreateNewPassword";
import { EnterYourEmail } from "@/app/(user)/_sign-upOrLogin-components/EnterYourEmail";
import { axiosDeliveryInstance } from "@/lib/axios-delivery-instance";

export const SignUpCart = () => {
  const [page, setPage] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleNextPage = async () => {
    if (page >= 1) {
      try {
        const response = await axiosDeliveryInstance.post("/auth/sign-up", {
          email: email,
          password: password,
        });

        console.log("Signup successful:", response.data);
        router.push("/");
        setPage(0);
      } catch (error) {
        console.log(error);
        throw new Error();
      }
    } else {
      setPage((page) => page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page <= 0) {
      setPage(0);
      router.push("/");
    } else {
      setPage((page) => page - 1);
    }
  };

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
