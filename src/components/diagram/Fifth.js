import { useSelector } from "react-redux";
import React, { PureComponent } from "react";
import { Box } from "@mui/system";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Fifth() {
  const { isAuth, currentUser, data, dataAvg } = useSelector(
    (state) => state.auth
  );
  const avg = dataAvg.data;
  const avgMen = avg.filter(
    (i) => i["показатель"] === "Cреднее отколонение-мужчины"
  )[0];
  const avgWomen = avg.filter(
    (i) => i["показатель"] === "Cреднее отколонение-женщины"
  )[0];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "ТЕСТ №5. Смысложизненные ориентации",
      },
    },
  };

  const round = (i) => {
    return parseFloat(i.replace(",", ".").replace(" ", ""));
  };

  const labels = [
    "Итого",
    "Цели в жизни",
    "Процесс в жизни",
    "Результат в жизни",
    "Лотус контроля - Я",
    "Лотус контроля - жизнь",
  ];

  const list = {
    labels,
    datasets: [
      {
        label: "Мужчины",
        data: labels.map((i) => [round(avgMen[i]) - 1, round(avgMen[i]) + 1]),
        backgroundColor: "rgba(53, 162, 235, 0.8)",
      },
      {
        label: "Женщины",
        data: labels.map((i) => [
          round(avgWomen[i]) - 1,
          round(avgWomen[i]) + 1,
        ]),
        backgroundColor: "rgba(230, 145, 28, 0.8)",
      },
      {
        label: "Индивидуальное значение",
        data: labels.map((i) => [round(data[0][i]) - 1, round(data[0][i]) + 1]),
        backgroundColor: "rgba(0, 0, 0, 0.9)",
      },
    ],
  };

  return (
    <Box className="container-diagrams">
      <Bar options={options} data={list} />
    </Box>
  );
}
