import {
  AlignJustify,
  Bell,
  LayoutDashboard,
  Sun,
  LogOut,
  Settings,
  X,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between pl-72 z-40 bg-slate-800 text-slate-50 h-16 px-12 py-4 fixed top-0 w-full right-0  ">
      {/* icon */}
      <button>
        <AlignJustify />
      </button>
      {/* 3icons */}
      <div className="flex space-x-3">
        <button>
          <Sun className="text-green-800" />
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-transparent rounded-lg ">
              <Bell className="text-green-800" />
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full -top-1 -end-1 dark:border-gray-900">
                20
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="py-2 px-4 pr-8">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image
                  src="/profile.jpg"
                  width={200}
                  height={200}
                  alt="User Profile"
                  className="rounded-full h-8 w-8"
                />
                <div className="flex flex-col space-y-1">
                  <p>Yellow sweet corn stock out,please</p>
                  <div className="flex items-center space-x-2 ">
                    <p className="px-2 py-1 bg-red-600 text-white rounded-full text-sm ">
                      stock out
                    </p>
                    <p>March 12 2025 -12:22 pm </p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2 ">
                <Image
                  src="/profile.jpg"
                  width={200}
                  height={200}
                  alt="User Profile"
                  className="rounded-full h-8 w-8"
                />
                <div className="flex flex-col space-y-1">
                  <p>Yellow sweet corn stock out,please</p>
                  <div className="flex items-center space-x-2 ">
                    <p className="px-2 py-1 bg-red-600 text-white rounded-full text-sm ">
                      stock out
                    </p>
                    <p>March 12 2025 -12:22 pm </p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image
                  src="/profile.jpg"
                  width={200}
                  height={200}
                  alt="User Profile"
                  className="rounded-full h-8 w-8"
                />
                <div className="flex flex-col space-y-1">
                  <p>Yellow sweet corn stock out,please</p>
                  <div className="flex items-center space-x-2 ">
                    <p className="px-2 py-1 bg-red-600 text-white rounded-full text-sm ">
                      stock out
                    </p>
                    <p>March 12 2025 -12:22 pm </p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div>
              <Image
                src="/profile.jpg"
                width={200}
                height={200}
                alt="User Profile"
                className="rounded-full h-8 w-8"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="py-2 px-4 pr-8">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Settings className="mr-2 h-4 w-4" />
                <span>Edit Profile</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
