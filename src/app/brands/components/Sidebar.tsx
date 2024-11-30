import React from "react";
import { SignalIcon } from "@heroicons/react/24/outline"; // Ícono para "Signal"
import { Cog8ToothIcon } from "@heroicons/react/24/solid"; // Ícono para redirección
import { ITEMS_SIDEBAR } from "@/constant/constant";
import SidebarItem from "./SideBarItem";

export const Sidebar = () => {
  return (
    <div className="w-90 h-screen p-4 bg-white text-black flex flex-col justify-between">
      <div>
        <div className="flex items-center mb-4">
          <SignalIcon className="text-primary h-6 w-6 mr-2" />
          <h2 className="text-lg font-bold">Signal Admin</h2>
        </div>
        <div className="bg-gray-100 rounded shadow-lg">
          {ITEMS_SIDEBAR.map((item) => (
            <SidebarItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="flex items-center mb-4 mt-auto">
        <Cog8ToothIcon className="text-primary h-6 w-6 mr-2" />
        <h2 className="text-lg font-bold">Config</h2>
      </div>
    </div>
  );
};
