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
      cash: 90.0,
      card: 10.0,
      credit: 50.0,
    },
    {
      period: "Yesterday",
      sales: 22000.0,
      color: "bg-orange-400",
      icon: <Hourglass />,
      cash: 90.0,
      card: 150.0,
      credit: 500.0,
    },
    {
      period: "This Month",
      sales: 12000000.0,
      color: "bg-blue-500",
      icon: <Gem />,
      cash: 40.0,
      card: 30.0,
      credit: 40.0,
    },
    {
      period: "Last Month",
      sales: 18000000.0,
      color: "bg-cyan-600",
      icon: <Anvil />,
      cash: 180.0,
      card: 100.0,
      credit: 750.0,
    },
    {
      period: "All Time",
      sales: 200000000.0,
      color: "bg-emerald-500",
      icon: <BookImage />,
      cash: 800.0,
      card: 100.0,
      credit: 50.0,
    },
  ];
  return (
    <div className="grid gap-2 mb-8 xl:grid-cols-5 md:grid-cols-2">
      {orderStatus.map((item, i) => (
        <LargeCard
          key={i}
          period={item.period}
          sales={item.sales}
          color={item.color}
          icon={item.icon}
          cash={item.cash}
          card={item.card}
          credit={item.credit}
        />
      ))}
    </div>
  );
}
