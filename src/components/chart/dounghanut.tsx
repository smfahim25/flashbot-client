import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartComponentProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
}

const DoughnutChart = () => {
  const data = {
    labels: ["Long", "Short"],
    datasets: [
      {
        label: "My Doughnut Chart",
        data: [70, 30],
        backgroundColor: ["#2DD2CE", "#FE0FE2"],
        borderColor: ["#2DD2CE", "#FE0FE2"],
        borderWidth: 1,
      },
    ],
  };
  const options: any = {
    plugins: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: "right",
      },
    },
  };
  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
