"use client";
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellerProductChart() {
  const data = {
    labels: ["Cabbage", "Watermelon", "Broccoli", "Maize"],
    datasets: [
      {
        label: "Best Selling Products",
        data: [35, 20, 15, 60],
        backgroundColor: [
          "rgb(11, 208, 67)",
          "rgb(62, 12, 242)",
          "rgb(152, 4, 138)",
          "rgb(255, 87, 2)",
        ],
        borderColor: [
          "rgb(11, 208, 67)",
          "rgb(62, 12, 242)",
          "rgb(152, 4, 138)",
          "rgb(255, 87, 2)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="bg-slate-700 p-8 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Best Selling Products</h2>
      {/* Chart */}
      <div className="p-4">
        <Pie data={data} />
      </div>
    </div>
  );
}
