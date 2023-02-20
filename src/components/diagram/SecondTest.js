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
    const { isAuth, currentUser, data, dataAvg } = useSelector((state) => state.auth);
    let val = data[0]
    
   //среднее значение по диаграмме
      const avg = dataAvg.data[1]
    //названия лепестков диаграммы
    const legend = ['Жизнестойкость', 'Вовлеченность', 'Контроль', 'Принятие риска']

    const list = {
        labels: legend,
        datasets: [
            {
                label: "ТЕСТ№2 : Жизнестойкость",
                data: legend.map(i => val[i])
            },
            {    label: "Среднее значение группы",
                 data: legend.map(i => parseFloat(avg[i].replace(',','.').replace(' ','')))
             }
        ]
    }

    return (
    <Box className='container-diagrams'>
      <Radar data={list} />
      </Box>)

}