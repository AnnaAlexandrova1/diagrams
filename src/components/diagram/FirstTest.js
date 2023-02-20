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
  
  const list = {
    labels: legend,
    datasets: [
      {
        label: "ТЕСТ№1 Уровень субъективного контроля",
        data: legend.map(i => val[i])
      },
      { label: "Средняя теста Уровень субъективного контроля",
        data: legend.map(i => parseFloat(avg[i].replace(',','.').replace(' ','')))
      }
    ],
  };
  
  return (
    <Box className='container-diagrams'>
      <Radar data={list} />
      </Box>)
}
