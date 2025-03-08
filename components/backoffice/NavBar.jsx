import { AlignJustify, Bell, Sun, User } from "lucide-react";
import React from "react";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between pl-64 z-40 bg-slate-800 text-slate-50 h-16 px-8 py-4 fixed top-0 w-full  right-0 ">
      {/* icon */}
      <button>
        <AlignJustify />
      </button>
      {/* 3icons */}
      <div className="flex space-x-3">
        <button>
          <Sun />
        </button>
        <button>
          <Bell />
        </button>
        <button>
          <User />
        </button>
      </div>
    </div>
  );
}
