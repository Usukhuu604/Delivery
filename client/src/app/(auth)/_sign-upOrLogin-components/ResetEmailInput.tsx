"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { LetsGoButton } from "./LetsGoButton";

type Props = {
  handleNextPage: () => void;
  email: string;
  setEmail: (email: string) => void;
};

export const ResetEmailInput = ({ handleNextPage, email, setEmail }: Props) => {
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;

    if (validateEmail(newEmail)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setEmail(newEmail);
  };

  const handleContinue = () => {
    if (email && isValid) {
      handleNextPage();
    }
  };

  return (
    <div>
      <Input
        type="email"
        required
        placeholder="Enter your email address"
        onChange={handleEmailChange}
        value={email}
      />
      {!isValid && (
        <p className="text-red-500 text-sm absolute">
          Invalid email. Use a format like example@email.com
        </p>
      )}
      <LetsGoButton handleNextPage={handleContinue} />
    </div>
  );
};
