"use client";

import React from "react";
import { useNavigate } from "@/hooks/useNavigate";

export const DontHaveAccount = () => {
  const navigateToSignup = useNavigate();

  const handleSignUp = () => {
    navigateToSignup("signup");
  };

  return (
    <div className="w-full text-center">
      <p className="text-gray-500">
        Don&apos;t have an account?{" "}
        <span
          onClick={handleSignUp}
          className="no-underline text-blue-500 cursor-pointer"
        >
          Sign up
        </span>
      </p>
    </div>
  );
};
