import NavBar from "@/components/backoffice/NavBar";
import SideBar from "@/components/backoffice/SideBar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 false">
      {/* Sidebar */}
      <SideBar />
      {/* Main content */}
      <div className="flex flex-col flex-1 w-full">
        {/* Header */}
        <NavBar />
        {/* Main */}
        <main className="h-full overflow-y-auto sm:container grid lg:px-6 sm:px-4 px-2 mx-auto ">
          {children}
        </main>
      </div>
    </div>
  );
}
