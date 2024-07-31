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

const RatioChart: React.FC = () => {
  const data = {
    labels: ["Win Ratio", "Loss Ratio"],
    datasets: [
      {
        label: "Win Ratio",
        data: [70, 0],
        backgroundColor: ["#2DD2CE"],
        borderColor: ["#ffffff"],
        borderWidth: 5,
        circumference: 270,
      },
      {
        label: "Loss Ratio",
        data: [0, 50],
        backgroundColor: ["#FE0FE2"],
        borderColor: ["#ffffff"],
        borderWidth: 5,
        circumference: 180,
      },
    ],
  };

  const options: any = {
    plugins: {
      legend: {
        position: "right",
        labels: {
          generateLabels: (chart: any) => {
            const original =
              ChartJS.defaults.plugins.legend.labels.generateLabels(chart);
            return original.map((label: any, i: number) => {
              const dataset = chart.data.datasets[i];
              label.fillStyle = dataset.backgroundColor[0]; // Set the color for the legend
              return label;
            });
          },
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default RatioChart;
