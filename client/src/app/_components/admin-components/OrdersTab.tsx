import { CustomerDeliveryStatus } from "./CustomerDeliveryStatus";
import { Badge } from "@/components/ui/badge";

export const OrdersTab = () => {
  return (
    <div className="border border-gray-400 rounded-[8px] h-full bg-white">
      <div className="flex justify-between border-b border-gray-400 p-4">
        <div>Orders</div>

        <Badge variant={"default"} className="border border-black">
          Change delivery state
        </Badge>
      </div>

      <div>
        <CustomerDeliveryStatus
          customer={"Customer"}
          food={"Food"}
          date={"Date"}
          total={"Total"}
          address={"Address"}
          status={"Status"}
        />
      </div>
    </div>
  );
};
