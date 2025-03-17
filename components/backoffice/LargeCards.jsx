import React from "react";
import LargeCard from "./LargeCard";
import { Layers, Hourglass, BookImage, Gem, Anvil } from "lucide-react";

export default function LargeCards() {
  const orderStatus = [
    {
      period: "Today",
      sales: 30000.0,
      color: "bg-teal-600",
      icon: <Layers />,
    },
    {
      period: "Yesterday",
      sales: 22000.0,
      color: "bg-orange-400",
      icon: <Hourglass />,
    },
    {
      period: "This Month",
      sales: 12000000.0,
      color: "bg-blue-500",
      icon: <Gem />,
    },
    {
      period: "Last Month",
      sales: 18000000.0,
      color: "bg-cyan-600",
      icon: <Anvil />,
    },
    {
      period: "All Time",
      sales: 200000000.0,
      color: "bg-emerald-500",
      icon: <BookImage />,
    },
  ];
  return (
    <div className="tab-enter grid gap-2 mb-8 xl:grid-cols-5 md:grid-cols-2">
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
