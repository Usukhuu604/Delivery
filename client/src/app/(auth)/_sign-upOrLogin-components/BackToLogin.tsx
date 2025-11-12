"use client";

import React from "react";
import { useNavigate } from "@/hooks/useNavigate";

export const BackToLogin = () => {
  const navigateToLogin = useNavigate();

  const handleLogIn = () => {
    navigateToLogin("login");
  };

  return (
    <div className="w-full text-center">
      <p className="text-gray-500">
        Remember your password?{" "}
        <span
          onClick={handleLogIn}
          className="no-underline text-blue-500 cursor-pointer"
        >
          Back to login
        </span>
      </p>
    </div>
  );
};
