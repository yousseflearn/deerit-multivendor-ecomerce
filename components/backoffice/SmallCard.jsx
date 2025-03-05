import { ShoppingCart } from "lucide-react";
import React from "react";

export default function SmallCard({ data }) {
  const { title, amount, color, icon } = data;
  return (
    <div className="rounded-lg shadow-lg bg-slate-700 p-4 ">
      <div className="flex space-x-4">
        <div
          className={`flex justify-center items-center rounded-full ${color} h-12 w-12`}
        >
          {icon}
        </div>
        <div className="">
          <p>{title}</p>
          <h3 className="text-2xl font-bold">{amount}</h3>
        </div>
      </div>
    </div>
  );
}
