import { useSelector } from "react-redux";
import React, { PureComponent } from "react";
import { Box } from "@mui/system";
import * as colors from "./../../colors/colors";

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

  const valGender = () => {
    if (data[0]['пол']==="ж") {
      return labels.map((i) => [
          round(avgWomen[i]) - 1,
          round(avgWomen[i]) + 1,
        ])
    } else if (data[0]['пол'] === "м") {
      return labels.map((i) => [round(avgMen[i]) - 1, round(avgMen[i]) + 1])
    } 
  }

  const drowLabel = () => {
    if (data[0]['пол'] === "ж") {
      return "Cреднее отколонение-женщины"
    } else if (data[0]['пол'] === "м") {
      return "Cреднее отколонение-мужчины"
    }
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
        label: "Индивидуальное значение",
        data: labels.map((i) => [round(data[0][i]) - 1, round(data[0][i]) + 1]),
        backgroundColor: colors.orange,
      },
          {
        label: drowLabel(),
        data: valGender(),
        backgroundColor: colors.blue,
      },
    ],
  };

  return (
    <Box className="container-diagrams"
    sx={{
        minHeight: { xs: '400px' },
      }}>
      <Bar options={options} data={list} />
    </Box>
  );
}
