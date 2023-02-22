import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import * as colors from "./../../colors/colors";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function ThirdTest() {
  const { isAuth, currentUser, data, dataAvg } = useSelector(
    (state) => state.auth
  );
  let val = data[0];
  let avgVal = dataAvg.data.filter(
    (i) => i["показатель"] === "среднее значение-3"
  );

  const round = (i) => {
    return parseFloat(i.replace(",", ".").replace(" ", ""));
  };

  const legend = [
    "ИТОГО-тест3",
    "Новизна проблемы",
    "Сложность проблемы",
    "Неразрешимость проблемы",
  ];

  const labels = [
    "Итог по трем показателям",
    "Новизна проблемы",
    "Сложность проблемы",
    "Неразрешимость проблемы",
  ];

  //среднее значение по диаграмме
  const avg = dataAvg.data[1];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "ТЕСТ№ 3 Отношение к проблемам",
      },
    },
  };

  const list = {
    labels,
    datasets: [
      {
        label: "Индивидуальное значение",
        data: legend.map((i) => val[i]),
        backgroundColor: colors.orange,
      },
      {
        label: "Среднее значение группы",
        data: legend.map((i) => round(avgVal[0][i])),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <Box className="container-diagrams">
      <Bar options={options} data={list} />
    </Box>
  );
}
