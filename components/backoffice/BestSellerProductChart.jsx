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
    <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
      <p className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
        Best Selling Products
      </p>
      {/* Chart */}
      <div className="w-full h-full flex flex-col items-center justify-between mt-6">
        <div>
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
}
