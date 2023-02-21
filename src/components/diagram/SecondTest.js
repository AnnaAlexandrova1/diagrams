import { useSelector } from "react-redux";
import { Box } from "@mui/system";

import { Radar } from "react-chartjs-2";
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

export default function SecondTest() {
  const { isAuth, currentUser, data, dataAvg } = useSelector(
    (state) => state.auth
  );
  let val = data[0];

  //среднее значение по диаграмме
  const avg = dataAvg.data[1];
  //названия лепестков диаграммы
  const legend = [
    "Жизнестойкость",
    "Вовлеченность",
    "Контроль",
    "Принятие риска",
  ];

    const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "ТЕСТ№ 2 Жизнестойкость",
      },
    },
  };

  const list = {
    labels: legend,
    datasets: [
      {
        label: "Индивидуальное значение",
        data: legend.map((i) => val[i]),
        borderColor: "rgba(230, 145, 28, 0.8)",
        backgroundColor: "rgba(230, 145, 28, 0.1)",
      },
      {
        label: "Среднее значение группы",
        data: legend.map((i) =>
          parseFloat(avg[i].replace(",", ".").replace(" ", ""))
        ),
        borderColor: "rgba(53, 162, 235, 0.8)",
        backgroundColor: "rgba(53, 162, 235, 0.1)",
      },
    ],
  };

  return (
    <Box className="container-diagrams">
      <Radar options={options} data={list} />
    </Box>
  );
}
