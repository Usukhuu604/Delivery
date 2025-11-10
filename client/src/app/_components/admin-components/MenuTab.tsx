import React from "react";
import { Badge } from "@/components/ui/badge";
export const MenuTab = () => {
  const arr = new Array(10);
  arr.push({ "all dishes": 10 }, { salad: 50 }, { Appetizer: 2 });

  return (
    <div className="flex flex-col">
      <div className="grid grid-rows-2 gap-4 bg-white rounded-[8px] p-4">
        <p>Dishes categories</p>

        <div className="flex gap-2">
          {arr.map((category: object, index: number) => {
            const dishName: string = Object.keys(category).toString();
            const total: string = Object.values(category).toString();
            return (
              <Badge
                variant={"default"}
                className="border border-black "
                key={index}
              >
                {dishName}
                <div className="bg-black text-white rounded-2xl p-2">
                  {total}
                </div>
              </Badge>
            );
          })}

          <div className="bg-red-500 rounded-full size-6 flex justify-center items-center text-white cursor-pointer">
            +
          </div>
        </div>
      </div>
    </div>
  );
};
