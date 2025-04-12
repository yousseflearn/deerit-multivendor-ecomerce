"use client";
import NavBar from "@/components/backoffice/NavBar";
import SideBar from "@/components/backoffice/SideBar";
import React, { useState } from "react";

export default function Layout({ children }) {
  const [showSideBar, SetShowSidebar] = useState(false);
  return (
    <div
      className={
        showSideBar
          ? "flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden"
          : "flex h-screen bg-gray-50 dark:bg-gray-900 false"
      }
    >
      {/* Sidebar */}
      <SideBar showSideBar={showSideBar} SetShowSidebar={SetShowSidebar} />
      {/* Main content */}
      <div className="flex flex-col flex-1 w-full">
        {/* Header */}
        <NavBar SetShowSidebar={SetShowSidebar} showSideBar={showSideBar} />
        {/* Main */}
        <main className="h-full overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
