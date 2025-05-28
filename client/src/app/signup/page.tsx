import React from "react";
import { DeliveryManImage } from "../components/common/DeliveryManImage";
import { SignUpCart } from "./sign-up-cart/SignUpCart";

const SignUpPage = () => {
  return (
    <div className="w-full h-screen py-6 px-6 flex items-center justify-between ">
      <SignUpCart />
      <DeliveryManImage />
    </div>
  );
};

export default SignUpPage;
