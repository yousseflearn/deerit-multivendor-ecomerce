import { ShoppingCart } from "lucide-react";
import React from "react";

export default function SmallCard({ data }) {
  const { title, amount, color, icon, bgColor, textColor, textDarkColor } =
    data;
  return (
    <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex h-full">
      <div className="p-4 flex items-center border border-gray-200 dark:border-gray-800 w-full rounded-lg ">
        <div
          className={`flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg  ${textColor} dark:${textDarkColor} ${color} dark:${bgColor}`}
        >
          {icon}
        </div>
        <div>
          <h6 className="text-sm mb-1 font-medium text-gray-600 dark:text-gray-400">
            <span>{title}</span>
          </h6>
          <p className="text-2xl font-bold leading-none text-gray-600 dark:text-gray-200">
            {amount}
          </p>
        </div>
      </div>
    </div>
  );
}
