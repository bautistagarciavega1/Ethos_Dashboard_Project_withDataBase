"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function BudgetChart() {
  const data = {
    labels: ["Resources", "Hardware", "Software", "Others"],
    datasets: [
      {
        label: "Planned",
        data: [20000, 10000, 30000, 10000],
        backgroundColor: "#1e40af",
      },
      {
        label: "Spent",
        data: [10000, 5000, 10000, 6000],
        backgroundColor: "#ef4444",
      },
      {
        label: "Remaining",
        data: [10000, 5000, 20000, 4000],
        backgroundColor: "#3b82f6",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ height: 270 }}>
      <h2>Budget</h2>
      <Bar data={data} options={options} />
    </div>
  );
}