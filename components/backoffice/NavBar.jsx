import {
  AlignJustify,
  Bell,
  LayoutDashboard,
  Sun,
  LogOut,
  Settings,
  X,
} from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="z-30 py-4 bg-white shadow-sm dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-emerald-500 dark:text-emerald-500">
        <button
          type="button"
          className="hidden lg:block outline-0 focus:outline-none "
        >
          <AlignJustify />
        </button>
        <ul className="flex justify-end items-center flex-shrink-0 space-x-6">
          <li>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="flex items-center ">
                    <Image
                      src="/english.png"
                      alt="English"
                      height={20}
                      width={20}
                    />
                    <span className="ml-3">English</span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <div className="flex items-center ">
                      <Image
                        src="/arabic.png"
                        alt="Arabic"
                        height={20}
                        width={20}
                      />
                      <span className="ml-2">Arabic</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center ">
                      <Image
                        src="/germany.png"
                        alt="Germany"
                        height={20}
                        width={20}
                      />
                      <span className="ml-2">Germany</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center ">
                      <Image
                        src="/india.png"
                        alt="India"
                        height={20}
                        width={20}
                      />
                      <span className="ml-2">India</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center ">
                      <Image
                        src="/urdu.png"
                        alt="Urdu"
                        height={20}
                        width={20}
                      />
                      <span className="ml-2">Urdu</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </li>
          <li className="flex">
            <div className="rounded-md focus:outline-none">
              <Sun />
            </div>
          </li>
          <li className="relative inline-block text-left">
            <div className="relative align-middle rounded-md focus:outline-none">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Bell />
                  <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                    5
                  </span>
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
                      <div>
                        <X />
                      </div>
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
                      <div>
                        <X />
                      </div>
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
                      <div>
                        <X />
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </li>
          <li className="relative inline-block text-left">
            <div className="rounded-full dark:bg-gray-500 bg-emerald-500 text-white h-8 w-8 font-medium mx-auto focus:outline-none">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div
                    className="relative rounded-full inline-block w-8 h-8 align-middle"
                    aria-hidden="true"
                  >
                    <Image
                      src="/profile.jpg"
                      alt="User Profile"
                      width={100}
                      height={100}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <div className="flex items-center ">
                      <LayoutDashboard />
                      <span className="ml-2">Dashboard</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center ">
                      <Settings />
                      <span className="ml-2">Edit Profile</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center ">
                      <LogOut />
                      <span className="ml-2">Log Out</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
