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

export default function FirstTest() {
  const { isAuth, currentUser, data, dataAvg } = useSelector((state) => state.auth);
  let val = data[0]

  //среднее значение по диаграмме
  const avg = dataAvg.data[0]
  //названия лепестков диаграммы
  const legend = ["Общая интернальность", "Интернальности в области достижений", "Интернальность в области неудач", "Интернальность в семейных отношениях",
    "Интернальность в производственных отношениях", "Интернальность в области межличностных отношений", "Интернальность в отношении здоровья и болезни"]
  
  const legendLabels = ["Общая интернальность", "В области достижений", "В области неудач", "В семейных отношениях",
    "В производственных отношениях", "В области межличностных отношений", "В отношении здоровья"]
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "ТЕСТ№ 1 Уровень субьективного контроля",
      },
    },
  };
  
  const list = {
    labels: legendLabels,
    datasets: [
      {
        label: "Индивидуальное значение",
        data: legend.map(i => val[i]),
        borderColor: "rgba(230, 145, 28, 0.8)",
        backgroundColor: "rgba(230, 145, 28, 0.1)",
      },
      { label: "Средняя теста Уровень субъективного контроля",
        data: legend.map(i => parseFloat(avg[i].replace(',', '.').replace(' ', ''))),
        borderColor: "rgba(53, 162, 235, 0.8)",
        backgroundColor: "rgba(53, 162, 235, 0.1)",
      }
    ],
  };
  
  return (
    <Box className='container-diagrams'>
      <Radar options={options} data={list}  />
    </Box>)
}
