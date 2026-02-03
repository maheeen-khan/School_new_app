import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart() {
  const data = {
    labels: ["January", "February", "March", "April"], // X-axis labels
    datasets: [
      {
        label: "Collected",
        data: [4000, 3000, 5000, 4000],
        backgroundColor: "#82ca9d"
      },
      {
        label: "Remaining",
        data: [1000, 1500, 800, 1200],
        backgroundColor: "#8884d8"
      },
      {
        label: "Expenses",
        data: [2000, 1200, 2500, 1800],
        backgroundColor: "#ff7300"
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Fees and Expenses Overview"
      }
    }
  };

  return <Bar data={data} options={options} />;
}

export default BarChart;
