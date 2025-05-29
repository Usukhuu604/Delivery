"use client";

import React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export const CreateNewPassword = () => {
  const [checkboxPassword, setCheckPassword] = useState(false);
  const [enterPassword, setEnterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const showPassword = checkboxPassword ? "text" : "password";

  const handleCheckbox = () => {
    setCheckPassword(!checkboxPassword);
  };

  const handleFirstPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnterPassword(event.target.value);
  };

  const handleConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <div className="flex flex-col gap-6">
      <Input type={showPassword} placeholder="Password" value={enterPassword} onChange={handleFirstPassword} />
      <Input type={showPassword} placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPassword} />
      {enterPassword != confirmPassword && <p className="text-red-500">Those password didn't match, try again</p>}
      <div className="flex space-x-2 items-center">
        <Checkbox
          id="show"
          onClick={handleCheckbox}
          checked={checkboxPassword}
          className={`text-white border border-black ${checkboxPassword ? "bg-black" : ""}`}
        />
        <label htmlFor="show">Show password</label>
      </div>
    </div>
  );
};
