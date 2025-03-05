import React from "react";
import LargeCard from "./LargeCard";
import { Layers, Hourglass, BookImage, Gem, Anvil } from "lucide-react";

export default function LargeCards() {
  const orderStatus = [
    {
      period: "Today",
      sales: 30000.0,
      color: "bg-green-500",
      icon: <Layers />,
    },
    {
      period: "Yesterday",
      sales: 22000.0,
      color: "bg-blue-500",
      icon: <Hourglass />,
    },
    {
      period: "This Month",
      sales: 12000000.0,
      color: "bg-orange-500",
      icon: <Gem />,
    },
    {
      period: "Last Month",
      sales: 18000000.0,
      color: "bg-purple-500",
      icon: <Anvil />,
    },
    {
      period: "All Time",
      sales: 200000000.0,
      color: "bg-green-500",
      icon: <BookImage />,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 py-4">
      {orderStatus.map((item, i) => (
        <LargeCard
          key={i}
          period={item.period}
          sales={item.sales}
          color={item.color}
          icon={item.icon}
        />
      ))}
    </div>
  );
}
