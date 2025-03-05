import React from "react";
import {
  LoaderCircle,
  ShoppingCart,
  CheckCheck,
  PackageSearch,
} from "lucide-react";
import SmallCard from "./SmallCard";

export default function SmallCards() {
  const orderStatus = [
    {
      title: "Total Order",
      amount: 500,
      color: "bg-green-500",
      icon: <ShoppingCart />,
    },
    {
      title: "Pending Order",
      amount: 30,
      color: "bg-blue-500",
      icon: <LoaderCircle />,
    },
    {
      title: "Order en process",
      amount: 100,
      color: "bg-orange-500",
      icon: <PackageSearch />,
    },
    {
      title: "Delivered Order",
      amount: 730,
      color: "bg-purple-500",
      icon: <CheckCheck />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
      {orderStatus.map((data, i) => (
        <SmallCard key={i} data={data} />
      ))}
    </div>
  );
}
