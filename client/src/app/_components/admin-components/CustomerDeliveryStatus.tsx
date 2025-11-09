type Props = {
  customer: string;
  food: string;
  date: string;
  total: string;
  address: string;
  status: string;
};

export const CustomerDeliveryStatus = ({
  customer,
  food,
  date,
  total,
  address,
  status,
}: Props) => {
  return (
    <div
      className={`grid px-4 py-2 border-b border-gray-200 ${
        customer === "Customer" && "bg-gray-200"
      }`}
      style={{ gridTemplateColumns: "25% 10% 12.5% 12.5% 30% 10%" }}
    >
      <div>{customer}</div>
      <div>{food}</div>
      <div>{date}</div>
      <div>{total}</div>
      <div>{address}</div>
      <div>{status}</div>
    </div>
  );
};
