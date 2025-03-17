"use client";
import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

export default function WeeklySalesChart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const tabs = [
    {
      title: "Sales",
      type: "sales",
      data: {
        labels,
        datasets: [
          {
            label: "Sales",
            data: labels.map(() =>
              faker.datatype.number({ min: -1000, max: 1000 })
            ),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            textColor: "rgb(255, 99, 132)",
          },
        ],
      },
    },
    {
      title: "Orders",
      type: "orders",
      data: {
        labels,
        datasets: [
          {
            label: "Orders",
            data: labels.map(() =>
              faker.datatype.number({ min: -1000, max: 1000 })
            ),
            borderColor: "rgb(11, 208, 67)",
            backgroundColor: "rgba(11, 208, 67, 0.5)",
          },
        ],
      },
    },
  ];
  const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type);

  return (
    <div className="min-w-0 p-4 bg-white rounded-lg shadow-sm dark:bg-gray-800">
      <p className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
        Weekly Sales
      </p>
      {/* Tabs */}

      <div className="ml-6 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mb-4">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map((tab, i) => {
            return (
              <li className="mr-2" key={i}>
                <button
                  onClick={() => setChartToDisplay(tab.type)}
                  className={
                    chartToDisplay === tab.type
                      ? "inline-block p-2 rounded-t-lg border-b-2 border-transparent text-emerald-600  border-emerald-600 active dark:text-emerald-500 dark:border-emerald-500 focus:outline-none"
                      : "inline-block p-2 rounded-t-lg border-b-2 border-transparent  hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 focus:outline-none"
                  }
                >
                  {tab.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Content to display */}
      {tabs.map((tab, i) => {
        if (chartToDisplay === tab.type) {
          return (
            <div
              key={i}
              className="flex flex-col items-center justify-between "
            >
              <Line options={options} data={tab.data} />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
