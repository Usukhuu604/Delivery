"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/providers/UserProvider";
import { useNavigate } from "@/hooks/useNavigate";

export const UserMenu = () => {
  const { user, logout } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-white text-sm">{user?.email}</span>
      <Button
        className="bg-red-500 text-white rounded-[1000px] px-4 py-2 cursor-pointer hover:bg-red-600"
        onClick={handleLogout}
      >
        Log out
      </Button>
    </div>
  );
};
