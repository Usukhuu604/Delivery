"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@/app/hooks/useNavigate";

export const SignUpLogin = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("signup");
  };

  const handleLogIn = () => {
    navigate("login");
  };

  return (
    <div className="w-38  h-9 font-medium  flex items-center justify-between   ">
      <Button className="bg-white  rounded-[1000px] px-3 py-2 cursor-pointer" onClick={handleSignUp}>
        Sign up
      </Button>
      <Button className="bg-red-500 text-white rounded-[1000px] px-3 py-2 cursor-pointer" onClick={handleLogIn}>
        Log in
      </Button>
    </div>
  );
};
