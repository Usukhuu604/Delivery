import { DeliveryManImage } from "@/app/(user)/_sign-upOrLogin-components/DeliveryManImage";
import { SignUpCart } from "./sign-up-cart/SignUpCart";

const SignUpPage = () => {
  return (
    <div className="w-full h-screen py-6 px-6 flex items-center justify-between cursor-default">
      <SignUpCart />
      <DeliveryManImage />
    </div>
  );
};

export default SignUpPage;
