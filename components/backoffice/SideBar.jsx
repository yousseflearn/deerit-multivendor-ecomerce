"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/logo.jpg";
import {
  ArchiveRestore,
  Tractor,
  Landmark,
  LayoutGrid,
  Users2,
  ClipboardPen,
  User,
  Settings,
  Layers,
  LogOut,
  ChevronRight,
  TicketPercent,
  SquareMenu,
  ChartColumnStacked,
  Boxes,
  ChevronDown,
  Wallet,
  Users,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { usePathname } from "next/navigation";

export default function SideBar({ showSideBar, SetShowSidebar }) {
  const pathName = usePathname();
  const sidebarLinks = [
    {
      title: "Customers",
      icon: Users2,
      href: "/dashboard/customers",
    },
    {
      title: "Markets",
      icon: Landmark,
      href: "/dashboard/markets",
    },
    {
      title: "Farmers",
      icon: Tractor,
      href: "/dashboard/farmers",
    },
    {
      title: "Orders",
      icon: ClipboardPen,
      href: "/dashboard/orders",
    },
    {
      title: "Our Staff",
      icon: User,
      href: "/dashboard/staff",
    },
    {
      title: "DeerIT Community",
      icon: Users,
      href: "/dashboard/community",
    },
    {
      title: "Wallet",
      icon: Wallet,
      href: "/dashboard/wallet",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
    {
      title: "Online Store",
      icon: ArchiveRestore,
      href: "/dashboard/store",
    },
  ];
  const categoryLinks = [
    {
      title: "Products",
      icon: Boxes,
      href: "/dashboard/products",
    },
    {
      title: "Categories",
      icon: ChartColumnStacked,
      href: "/dashboard/categories",
    },
    {
      title: "Attributes",
      icon: SquareMenu,
      href: "/dashboard/attributes",
    },
    {
      title: "Coupons",
      icon: TicketPercent,
      href: "/dashboard/coupons",
    },
    {
      title: "Store Sliders",
      icon: User,
      href: "/dashboard/sliders",
    },
  ];
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div
      className={
        showSideBar
          ? "fixed inset-y-0 z-50 flex-shrink-0 w-64 sm:mt-16 overflow-y-auto bg-white dark:bg-gray-800 lg:hidden"
          : "z-30 flex-shrink-0 hidden shadow-sm w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block"
      }
    >
      <div className="py-4 text-gray-500 dark:text-gray-400">
        <Link
          onClick={() => SetShowSidebar(false)}
          className="logo.jpg text-gray-900 dark:text-gray-200 flex items-center justify-start px-6 py-2"
          href="/dashboard"
        >
          <Image src={logo} alt="DeerIT logo" className="rounded-full w-12 " />
          <span className="ml-2">DeerIT</span>
        </Link>
        <div className="flex flex-col space-y-3 mt-12">
          <Link
            onClick={() => SetShowSidebar(false)}
            className={
              pathName === "/dashboard"
                ? "space-x-3 px-6 py-2 text-emerald-600 border-l-4 border-emerald-600 flex items-center"
                : "space-x-3 px-6 py-2  flex items-center"
            }
            target="_self"
            rel="noreferrer"
            href="/dashboard"
          >
            <LayoutGrid />
            <span>Dashboard</span>
          </Link>
          <Collapsible className="px-6 py-2">
            <CollapsibleTrigger
              className=""
              onClick={() => setOpenMenu(!openMenu)}
            >
              <div className="flex items-center space-x-6 py-2 hover:text-emerald-600 ">
                <div className="flex items-center space-x-3">
                  <Layers />
                  <span>Catalogue</span>
                </div>
                {openMenu ? <ChevronDown /> : <ChevronRight />}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-6 px-3 py-2 rounded-lg dark:bg-gray-900">
              {categoryLinks.map((Item, index) => {
                const Icon = Item.icon;
                return (
                  <Link
                    onClick={() => SetShowSidebar(false)}
                    key={index}
                    className={
                      pathName === Item.href
                        ? "space-x-3 text-sm  py-1.5 text-emerald-600  flex items-center "
                        : "space-x-3 text-sm  py-1.5  flex items-center hover:text-emerald-600"
                    }
                    target="_self"
                    rel="noreferrer"
                    href={Item.href}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{Item.title}</span>
                  </Link>
                );
              })}
            </CollapsibleContent>
          </Collapsible>
          {sidebarLinks.map((Item, index) => {
            const Icon = Item.icon;
            return (
              <Link
                onClick={() => SetShowSidebar(false)}
                key={index}
                className={
                  pathName === Item.href
                    ? "space-x-3 px-6 py-2 text-emerald-600 border-l-4 border-emerald-600 flex items-center"
                    : "space-x-3 px-6 py-2  flex items-center hover:text-emerald-600"
                }
                target="_self"
                rel="noreferrer"
                href={Item.href}
              >
                <Icon />
                <span>{Item.title}</span>
              </Link>
            );
          })}
        </div>
        <div className=" px-6 py-2">
          <button className="flex px-12 py-2 items-center space-x-3 rounded-md bg-emerald-500 w-full  ">
            <LogOut />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}
