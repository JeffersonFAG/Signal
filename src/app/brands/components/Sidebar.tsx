"use client";
import React, { useState } from "react";
import { SignalIcon } from "@heroicons/react/24/outline";
import { Cog8ToothIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { ITEMS_SIDEBAR } from "@/constant/constant";
import SidebarItem from "./SideBarItem";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button
        className="p-2 bg-primary text-white boder-black fixed top-2 left-2 z-50 rounded md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bars3Icon className="h-6 w-6" />
      </button>
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed md:static z-40 h-full bg-white w-64 md:w-80 shadow-lg transition-transform duration-300`}
      >
        <div className="p-4 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center mb-4 text-black">
              <SignalIcon className="text-primary h-6 w-6 mr-2" />
              <h2 className="text-lg font-bold">Signal Admin</h2>
            </div>
            <div className="bg-gray-100 rounded shadow-lg">
              {ITEMS_SIDEBAR.map((item) => (
                <SidebarItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="flex items-center mb-4 mt-auto text-black">
            <Cog8ToothIcon className="text-primary h-6 w-6 mr-2" />
            <h2 className="text-lg font-bold">Config</h2>
          </div>
        </div>
      </div>
    </>
  );
};
