import { DeliveryManImage } from "@/app/(auth)/_sign-upOrLogin-components/DeliveryManImage";
import { SignUpCart } from "../_sign-upOrLogin-components/SignUpCart";

const SignUpPage = () => {
  return (
    <div className="w-full h-screen py-6 px-6 flex items-center justify-between cursor-default">
      <SignUpCart />
      <DeliveryManImage />
    </div>
  );
};

export default SignUpPage;
