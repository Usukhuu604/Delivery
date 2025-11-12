"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { LetsGoButton } from "./LetsGoButton";

type Props = {
  handleNextPage: () => void;
  password: string;
  setPassword: (password: string) => void;
};

export const ResetPasswordForm = ({
  handleNextPage,
  password,
  setPassword,
}: Props) => {
  const [checkboxPassword, setCheckPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const showPassword = checkboxPassword ? "text" : "password";

  const handleCheckbox = () => {
    setCheckPassword(!checkboxPassword);
  };

  const handleFirstPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  const handleReset = () => {
    if (password && confirmPassword && password === confirmPassword) {
      handleNextPage();
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Input
        type={showPassword}
        placeholder="New Password"
        value={password}
        onChange={handleFirstPassword}
      />
      <Input
        type={showPassword}
        placeholder="Confirm New Password"
        value={confirmPassword}
        onChange={handleConfirmPassword}
      />
      {password !== confirmPassword && confirmPassword && (
        <p className="text-red-500">
          Those passwords didn&apos;t match, try again
        </p>
      )}
      <div className="flex space-x-2 items-center">
        <Checkbox
          id="show"
          onClick={handleCheckbox}
          checked={checkboxPassword}
          className={`text-white border border-black ${
            checkboxPassword ? "bg-black" : ""
          }`}
        />
        <label htmlFor="show">Show password</label>
      </div>
      <LetsGoButton handleNextPage={handleReset} />
    </div>
  );
};
