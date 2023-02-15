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
  const { isAuth, currentUser, data } = useSelector((state) => state.auth);
  let val = data[0]
  //названия лепестков диаграммы
  const legend = ["ИО", "ИД", "ИН", "ИС", "ИП", "ИМ", "ИЗ"]
  
  const list = {
    labels: legend,
    datasets: [
      {
        label: "ТЕСТ№1 Уровень субъективного контроля",
        data: legend.map(i => val[i])
      },
    ],
  };

  return (
    <Box className='container-diagrams'>
      <Radar data={list} />
      </Box>)
}
