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
      bgColor: "bg-orange-100",
      bgDarkColor: "bg-orange-500",
      textColor: "text-orange-600",
      textDarkColor: "text-orange-100",
      icon: <ShoppingCart />,
    },
    {
      title: "Pending Order",
      amount: 30,
      bgColor: "bg-blue-100",
      bgDarkColor: "bg-blue-500",
      textColor: "text-blue-600",
      textDarkColor: "text-blue-100",
      icon: <LoaderCircle />,
    },
    {
      title: "Order en process",
      amount: 100,
      bgColor: "bg-emerald-100",
      bgDarkColor: "bg-emerald-500",
      textColor: "text-emerald-600",
      textDarkColor: "text-emerald-100",
      icon: <PackageSearch />,
    },
    {
      title: "Delivered Order",
      amount: 730,
      bgColor: "bg-teal-100",
      bgDarkColor: "bg-teal-500",
      textColor: "text-teal-600",
      textDarkColor: "text-teal-100",
      icon: <CheckCheck />,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {orderStatus.map((data, i) => (
        <SmallCard key={i} data={data} />
      ))}
    </div>
  );
}
