import React from "react";
import LargeCard from "./LargeCard";

export default function LargeCards() {
  const orderStatus = [
    {
      period: "Today",
      sales: 30000.0,
      color: "bg-green-500",
    },
    {
      period: "Yesterday",
      sales: 22000.0,
      color: "bg-blue-500",
    },
    {
      period: "This Month",
      sales: 12000000.0,
      color: "bg-orange-500",
    },
    {
      period: "Last Month",
      sales: 18000000.0,
      color: "bg-purple-500",
    },
    {
      period: "All Time",
      sales: 200000000.0,
      color: "bg-green-500",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-8">
      {orderStatus.map((item, i) => (
        <LargeCard
          key={i}
          period={item.period}
          sales={item.sales}
          color={item.color}
        />
      ))}
    </div>
  );
}
