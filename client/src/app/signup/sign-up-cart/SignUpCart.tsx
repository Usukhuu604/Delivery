import { AlreadyHaveAnAccount } from "@/app/components/common/sign-upOrLogin/AlreadyHaveAnAccount";
import { CreateNewPassword } from "@/app/components/common/sign-upOrLogin/CreateNewPassword";
import { CreateYourAccountBanner } from "@/app/components/common/sign-upOrLogin/CreateYourAccountBanner";
import { EnterYourEmail } from "@/app/components/common/sign-upOrLogin/EnterYourEmail";

import React, { useState } from "react";

export const SignUpCart = () => {
  const Carts = [EnterYourEmail, CreateNewPassword][1];

  // const [page, setPage] = useState(0);

  return (
    <div className="ml-20  w-[50vw] pr-25 grid gap-6">
      <CreateYourAccountBanner />
      <Carts />
      <AlreadyHaveAnAccount />
    </div>
  );
};
