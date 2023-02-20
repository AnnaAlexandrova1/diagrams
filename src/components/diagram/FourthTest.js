import { useSelector } from "react-redux";
import { Box } from "@mui/system";


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


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
    const { isAuth, currentUser, data, dataAvg } = useSelector((state) => state.auth);
    let val = data[0]

    
   //среднее значение по диаграмме
    const avg = dataAvg.data[0]
    const labels = ['zydfhm', 'atdhfkm']
const options = {
    responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};
  const list = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [5, 8],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [8, 15],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
    
    return (
    <Box className='container-diagrams'>
            <Line data={list}
            options={options}/>
      </Box>)

}