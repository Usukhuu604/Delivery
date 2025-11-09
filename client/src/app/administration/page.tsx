"use client";

import { AdminSideBar } from "../_components/admin-components/AdminSideBar";
import { OrdersTab } from "../_components/admin-components/OrdersTab";
import { MenuTab } from "../_components/admin-components/MenuTab";
import { useState } from "react";

const Admin = () => {
  const [page, setPage] = useState("MENU");

  return (
    <div className="w-screen h-screen flex ">
      <AdminSideBar setPage={setPage} />

      <div className="bg-gray-200 w-full p-10">
        <div className=" bg-white border border-gray-400 rounded-[8px] h-full">
          {page == "MENU" ? <MenuTab /> : <OrdersTab />}
        </div>
      </div>
    </div>
  );
};

export default Admin;
