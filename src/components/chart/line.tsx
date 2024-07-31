import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

interface LineChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor?: string;
      borderWidth?: number;
      pointBackgroundColor?: string;
    }[];
  };
}

const LineChart: React.FC = () => {
  const data = {
    labels: ["10", "11", "12", "13", "15"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 50],
        borderColor: "#FE0FE2",
        backgroundColor: "#FE0FE2",
        borderWidth: 3,
        pointBackgroundColor: "#FF5733",
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
    scales: {
      y: {
        display: false, // Hide the y-axis
      },
    },
    tension: 0.3,
    bezierCurve: false,
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: "100%", height: "200px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
