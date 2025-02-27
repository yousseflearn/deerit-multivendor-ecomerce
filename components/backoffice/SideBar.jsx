import Link from "next/link";
import React from "react";

export default function SideBar() {
  return (
    <div className="bg-slate-700 space-y-6 w-60 min-h-screen text-slate-50 p-3 fixed left-0 top-0">
      <Link href="" className="mb-6">
        Logo
      </Link>
      <div className="space-y-3 flex flex-col">
        <Link href="#">Dashboard</Link>
        <Link href="#">Catalogue</Link>
        <Link href="#">Customers</Link>
        <Link href="#">Markets</Link>
        <Link href="#">Farmers</Link>
        <Link href="#">Orders</Link>
        <Link href="#">Staff</Link>
        <Link href="#">Settings</Link>
        <Link href="#">Online Store</Link>
      </div>
    </div>
  );
}
