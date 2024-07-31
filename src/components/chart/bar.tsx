import React from "react";
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

const BarChart: React.FC = () => {
  const data = {
    labels: ["January", "February", "March", "April", "March", "April"],
    datasets: [
      {
        label: "Total Positive Shorts",
        data: [65, 59, 86, 81, 56, 55],
        backgroundColor: "#FFE6FC",
        borderColor: "#FFE6FC",
        borderWidth: 1,
      },
      {
        label: "Total Negative Shorts",
        data: [-28, -48, -40, -19, -86, -27],
        backgroundColor: "#FE0FE2",
        borderColor: "#FE0FE2",
        borderWidth: 1,
      },
    ],
  };
  // Calculate the maximum positive value across all datasets
  const allData = data.datasets.flatMap((dataset) => dataset.data);
  const maxPositiveValue = Math.max(...allData.filter((value) => value > 0), 0);
  const maxNegativeValue = Math.min(...allData.filter((value) => value < 0), 0);

  const options = {
    // indexAxis: "y" as const, // This makes the bar chart horizontal
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        // beginAtZero: true,
        stacked: true,
      },
      y: {
        stacked: true, // Stack the bars on the y-axis
        reverse: false,
        min: maxNegativeValue,
        max: maxPositiveValue,
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
