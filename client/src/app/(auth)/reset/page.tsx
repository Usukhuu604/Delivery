import { DeliveryManImage } from "@/app/(auth)/_sign-upOrLogin-components/DeliveryManImage";
import { ResetCart } from "../_sign-upOrLogin-components/ResetCart";

const ResetPasswordPage = () => {
  return (
    <div className="w-full h-screen py-6 px-6 flex items-center justify-between cursor-default">
      <ResetCart />
      <DeliveryManImage />
    </div>
  );
};

export default ResetPasswordPage;
