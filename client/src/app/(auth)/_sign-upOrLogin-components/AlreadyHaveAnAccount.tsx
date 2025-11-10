"use client";

import React from "react";
import { useNavigate } from "@/hooks/useNavigate";

export const AlreadyHaveAnAccount = () => {
  const navigateToLogin = useNavigate();

  const handleLogIn = () => {
    navigateToLogin("login");
  };

  return (
    <div className="w-full text-center">
      <p className="text-gray-500">
        Already have an account?{" "}
        <span
          onClick={handleLogIn}
          className="no-underline text-blue-500 cursor-pointer"
        >
          Log in
        </span>
      </p>
    </div>
  );
};
