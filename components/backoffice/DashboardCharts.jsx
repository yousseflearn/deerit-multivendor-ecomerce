import React from "react";
import WeeklySalesChart from "./WeeklySalesChart";
import BestSellerProductChart from "./BestSellerProductChart";

export default function DashboardCharts() {
  return (
    <div className="grid gap-4 md:grid-cols-2 my-8">
      <WeeklySalesChart />
      <BestSellerProductChart />
    </div>
  );
}
