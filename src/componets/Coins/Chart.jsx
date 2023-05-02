import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  Tooltip,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  Tooltip,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title
);

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

export const Chart = ({ arr = [], days, cuu = "inr" }) => {
  let prices = [];
  const date = [];

  for (let index = 0; index < arr.length; index++) {
    days === "24h"
      ? date.push(new Date(arr[index][0]).toLocaleTimeString())
      : date.push(new Date(arr[index][0]).toLocaleDateString());
    prices.push(arr[index][1]);
  }

  return (
    <Line
      options={{
        responsive: true,
      }}
      data={{
        labels: date,
        datasets: [
          {
            label: `Price in ${cuu}`,
            data: prices,
            borderColor: "rgb(255,99,132)",
            backgroundColor: "rgb(255,99,122)",
          },
        ],
      }}
    />
  );
};
