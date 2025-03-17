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
      color: "bg-orange-100",
      bgColor: "bg-orange-500",
      icon: <ShoppingCart />,
    },
    {
      title: "Pending Order",
      amount: 30,
      color: "bg-orange-100",
      bgColor: "bg-orange-500",
      icon: <LoaderCircle />,
    },
    {
      title: "Order en process",
      amount: 100,
      color: "bg-orange-100",
      bgColor: "bg-orange-500",
      icon: <PackageSearch />,
    },
    {
      title: "Delivered Order",
      amount: 730,
      color: "bg-orange-100",
      bgColor: "bg-orange-500",
      icon: <CheckCheck />,
    },
  ];

  return (
    <div className="tab-enter grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {orderStatus.map((data, i) => (
        <SmallCard key={i} data={data} />
      ))}
    </div>
  );
}
