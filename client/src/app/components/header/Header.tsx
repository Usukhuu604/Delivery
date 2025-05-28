import React from "react";
import { Logo } from "../common/Logo";
import { SignUpLogin } from "./components/SignUpLogin";
import { HeaderImage } from "./components/HeaderImage";

const Header = () => {
  return (
    <div>
      <div className="w-full h-17 bg-black flex items-center px-22 justify-between">
        <Logo />
        <SignUpLogin />
      </div>

      <HeaderImage />
    </div>
  );
};

export default Header;
