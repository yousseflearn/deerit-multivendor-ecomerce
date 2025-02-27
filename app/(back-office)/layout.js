import NavBar from "@/components/backoffice/NavBar";
import SideBar from "@/components/backoffice/SideBar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SideBar />
      {/* Main content */}
      <div className="w-full">
        {/* Header */}
        <NavBar />
        {/* Main */}
        <main className="ml-60 p-8 bg-slate-900 text-slate-50 min-h-screen mt-16 ">
          {children}
        </main>
      </div>
    </div>
  );
}
