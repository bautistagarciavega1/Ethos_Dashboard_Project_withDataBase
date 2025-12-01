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

export default function RiskIssuesChart() {
  const data = {
    labels: ["Open Risks", "Open Issues"],
    datasets: [
      {
        label: "High",
        backgroundColor: "#ef4444",
        data: [6.5, 8.5],
      },
      {
        label: "Medium",
        backgroundColor: "#f59e0b",
        data: [7.5, 9],
      },
      {
        label: "Low",
        backgroundColor: "#3b82f6",
        data: [1.5, 3.5],
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
      <h2>Risks &amp; Issues</h2>
      <Bar data={data} options={options} />
    </div>
  );
}