import Image from "next/image";

export const HeaderImage = () => {
  return (
    <div className="w-full h-[60vh] relative">
      <Image
        src="/header-image.png"
        alt="Header"
        fill
        className="object-center object-cover"
        priority
      />
    </div>
  );
};
