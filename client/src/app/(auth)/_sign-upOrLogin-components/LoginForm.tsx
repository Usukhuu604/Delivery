"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { LetsGoButton } from "./LetsGoButton";
import Link from "next/link";

type Props = {
  handleNextPage: () => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
};

export const LoginForm = ({
  handleNextPage,
  email,
  setEmail,
  password,
  setPassword,
}: Props) => {
  const [checkboxPassword, setCheckPassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const showPassword = checkboxPassword ? "text" : "password";

  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleCheckbox = () => {
    setCheckPassword(!checkboxPassword);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    if (newEmail) {
      setIsValidEmail(validateEmail(newEmail));
    } else {
      setIsValidEmail(true);
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (email && password && isValidEmail) {
      handleNextPage();
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Input
          type="email"
          required
          placeholder="Enter your email address"
          onChange={handleEmailChange}
          value={email}
        />

        {!isValidEmail && (
          <p className="text-red-500 text-sm absolute">
            Invalid email. Use a format like example@email.com
          </p>
        )}
      </div>

      <Input
        type={showPassword}
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />

      <div className="flex justify-between items-center">
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

        <Link href="/reset" className="text-blue-500 hover:underline">
          Forgot password?
        </Link>
      </div>

      <LetsGoButton handleNextPage={handleLogin} />
    </div>
  );
};
