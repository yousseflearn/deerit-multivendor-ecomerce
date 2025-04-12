import { Layers } from "lucide-react";
import React from "react";

export default function LargeCard({
  period,
  sales,
  color,
  icon,
  cash,
  card,
  credit,
}) {
  return (
    <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex justify-center h-full">
      <div
        className={`border border-gray-200 justify-between dark:border-gray-800 w-full p-6 rounded-lg text-white dark:text-emerald-100 ${color}`}
      >
        <div className="text-center xl:mb-0 mb-3">
          <div
            className={`text-center inline-block text-3xl text-white dark:text-emerald-100 ${color}`}
          >
            {icon}
          </div>
          <div>
            <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">
              {period}
            </p>
            <p className="text-2xl font-bold leading-none text-gray-50 dark:text-gray-50">
              ${sales}
            </p>
          </div>
          <div className="flex text-center text-xs font-normal text-gray-50 dark:text-gray-100">
            <div className="px-1 mt-3">Cash : ${cash} </div>
            <div className="px-1 mt-3">Card : ${card}</div>
            <div className="px-1 mt-3">Credit : ${credit}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
