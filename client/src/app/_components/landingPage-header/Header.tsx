"use client";

import React from "react";
import { useUserContext } from "@/providers/UserProvider";
import { Logo } from "../common/Logo";
import { SignUpLogin } from "./SignUpLogin";
import { HeaderImage } from "./HeaderImage";
import { UserMenu } from "./UserMenu";

const Header = () => {
  const { user, isLoading } = useUserContext();

  return (
    <div>
      <div className="w-full h-17 bg-black flex items-center px-22 justify-between">
        <Logo />
        {!isLoading && (user ? <UserMenu /> : <SignUpLogin />)}
      </div>

      <HeaderImage />
    </div>
  );
};

export default Header;
