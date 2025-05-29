import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const CreateYourAccountBanner = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Button className="w-min  shadow-gray-300">
        <ArrowLeft />
      </Button>
      <h1 className="font-bold text-3xl">Create your account</h1>
      <p className="text-gray-500 text-[16px]">Sign up to explore your favourite dishes</p>
    </div>
  );
};
