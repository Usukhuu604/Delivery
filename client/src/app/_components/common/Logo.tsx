import React from "react";

export const Logo = () => {
  return (
    <div className="w-38 h-11 flex flex-row items-center justify-center gap-1 cursor-default">
      <img src="nomnomlogo.png" alt="Logo" />
      <div>
        <p className="font-semibold text-2xl">
          <span className="text-white">Nom</span>
          <span className="text-red-500">Nom</span>
        </p>
        <p className="font-normal text-[12px] text-white">Swift Delivery</p>
      </div>
    </div>
  );
};
