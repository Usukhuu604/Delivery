import { DeliveryManImage } from "@/app/(auth)/_sign-upOrLogin-components/DeliveryManImage";
import { LoginCart } from "../_sign-upOrLogin-components/LoginCart";

const LogInPage = () => {
  return (
    <div className="w-full h-screen py-6 px-6 flex items-center justify-between cursor-default">
      <LoginCart />
      <DeliveryManImage />
    </div>
  );
};

export default LogInPage;
