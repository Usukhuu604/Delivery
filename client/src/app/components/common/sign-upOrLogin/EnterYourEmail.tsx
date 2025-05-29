"use client";

import React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { LetsGoButton } from "./LetsGoButton";

export const EnterYourEmail = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [emailReady, setEmailReady] = useState("");

  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    if (validateEmail(email)) {
      setIsValid(true);
      setEmailReady(email);
    } else {
      setIsValid(false);
    }
    setEmail(email);
  };

  return (
    <div>
      <Input type="email" required placeholder="Enter your email address" onChange={handleEmailChange} value={email} />
      {!isValid && <p className="text-red-500 text-sm absolute">Invalid email. Use a format like example@email.com</p>}
      <LetsGoButton />
    </div>
  );
};
