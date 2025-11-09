"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

type Props = {
  textColor?: string;
};

export const Logo = ({ textColor }: Props) => {
  const color = textColor ? "black" : "";
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <div
      className="w-38 h-11 flex flex-row items-center justify-center gap-1 cursor-pointer"
      onClick={handleClick}
    >
      <Image src="/nomnomlogo.png" alt="Logo" width={152} height={44} />

      <div>
        <p className="font-semibold text-2xl">
          {color ? (
            <span className="text-black">Nom</span>
          ) : (
            <span className="text-white">Nom</span>
          )}
          <span className="text-red-500">Nom</span>
        </p>

        <p
          className={`font-normal text-[12px] text-${
            color ? "black" : "white"
          } `}
        >
          Swift Delivery
        </p>
      </div>
    </div>
  );
};
