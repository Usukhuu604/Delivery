import { Logo } from "../common/Logo";
import { Badge } from "@/components/ui/badge";
import { Menu, Truck } from "lucide-react";

type Props = {
  setPage: (page: string) => void;
};

export const AdminSideBar = ({ setPage }: Props) => {
  const handleClick = (page: string) => {
    setPage(page);
  };

  return (
    <div className="flex flex-col w-50 mt-6 ml-4 pr-4 gap-5">
      <Logo textColor={"black"} />

      <div className="flex flex-col gap-2">
        <Badge
          onClick={() => handleClick("MENU")}
          variant={"default"}
          className="w-full border border-black hover:bg-black hover:text-white cursor-pointer p-2 pl-4 flex items-center justify-start gap-2"
        >
          <Menu />
          Food menu
        </Badge>

        <Badge
          onClick={() => handleClick("ORDERS")}
          variant={"default"}
          className="w-full border border-black hover:bg-black hover:text-white cursor-pointer p-2 pl-4 flex items-center justify-start gap-2"
        >
          <Truck />
          Orders
        </Badge>
      </div>
    </div>
  );
};
