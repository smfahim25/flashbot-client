import { Pie } from "react-chartjs-2";
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
const PieChart = () => {
  const data = {
    labels: ["Long", "Short"],
    datasets: [
      {
        label: "Pie Chart",
        data: [55, 45],
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
  return <Pie data={data} options={options} />;
};

export default PieChart;
