import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  handlePreviousPage: () => void;
};

export const LoginBanner = ({ handlePreviousPage }: Props) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Button onClick={handlePreviousPage} className="w-min shadow-gray-300">
        <ArrowLeft />
      </Button>
      <h1 className="font-bold text-3xl">Log in to your account</h1>
      <p className="text-gray-500 text-[16px]">
        Welcome back! Please enter your details
      </p>
    </div>
  );
};
