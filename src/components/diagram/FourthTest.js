import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { PureComponent } from "react";
import * as colors from "./../../colors/colors";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, CartesianAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function FourthTest() {
  const { isAuth, currentUser, data, dataAvg } = useSelector(
    (state) => state.auth
  );
  let val = data[0]["ИТОГО-тест4"];

  //среднее значение по диаграмме
  const avg = dataAvg.data;
  const low = avg.filter((i) => i["показатель"] === "Низкий уровень апатии");
  const middle = avg.filter(
    (i) => i["показатель"] === "Средний уровень апатии"
  );
  const hight = avg.filter((i) => i["показатель"] === "Высокий уровень апатии");
  const hightTop = +middle[0]["до"] + +low[0]["до"] - +low[0]["от"];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "ТЕСТ№ 4 Шкала апатии",
      },
    },
  };
  const labels = ["", "Начало диапазона", "Конец диапазона", ""];
  const list = {
    labels,
    datasets: [
      {
        label: "Индивидуальное значение",
        data: [NaN, val, val, NaN],
        borderColor: colors.orange,
        backgroundColor: colors.orange,
      },
      {
        label: "Низкий уровень апатии",
        data: [NaN, low[0]["от"], low[0]["до"], NaN],
        borderColor: colors.blueLow,
        backgroundColor: colors.blueLow,
      },
      {
        label: "Средний уровень апатии",
        data: [NaN, middle[0]["от"], middle[0]["до"], NaN],
        borderColor: colors.blue,
        backgroundColor: colors.blue,
      },
      {
        label: "Высокий уровень апатии",
        data: [NaN, hight[0]["от"], hightTop, NaN],
        borderColor: colors.blueHight,
        backgroundColor: colors.blueHight,
      },
    ],
  };

  return (
    <Box className="container-diagrams">
      <Line options={options} data={list} />
    </Box>
  );
}
