import { Layers } from "lucide-react";
import React from "react";

export default function LargeCard({ period, sales, color, icon }) {
  return (
    <div
      className={`rounded-lg p-8 gap-2 flex flex-col items-center ${color} shadow-md text-white`}
    >
      {icon}
      <h4>{period}</h4>
      <h2 className="lg:text-3xl text-2xl">{sales}</h2>
    </div>
  );
}
