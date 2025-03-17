import { Layers } from "lucide-react";
import React from "react";

export default function LargeCard({ period, sales, color, icon }) {
  return (
    <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex justify-center h-full">
      <div
        className={`p-4 border border-gray-200 justify-between dark:border-gray-800 w-full rounded-lg text-white dark:text-emerald-100  ${color} `}
      >
        {icon}
        <h4>{period}</h4>
        <h2 className="lg:text-3xl text-2xl">{sales}</h2>
      </div>
    </div>
  );
}
