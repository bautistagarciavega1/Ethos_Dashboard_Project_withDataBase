"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function RiskIssuesChart({ risks }: any) {

  // Datos dinámicos o fallback si no se pasa nada
  const riskData = risks ?? {
    labels: ["Open Risks", "Open Issues"],
    high: [6, 8],
    medium: [5, 7],
    low: [3, 4],
  };

  const data = {
    labels: riskData.labels,
    datasets: [
      {
        label: "High",
        data: riskData.high,
        backgroundColor: "#ef4444",
      },
      {
        label: "Medium",
        data: riskData.medium,
        backgroundColor: "#f59e0b",
      },
      {
        label: "Low",
        data: riskData.low,
        backgroundColor: "#3b82f6",
      },
    ],
  };

  return (
    <div>
      <h2>Risks & Issues</h2>
      <Bar data={data} />
    </div>
  );
}
