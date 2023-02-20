import { useSelector } from "react-redux";
import { CircularProgress, Box, Typography } from "@mui/material";
import FirstTest from "./diagram/FirstTest";
import SecondTest from "./diagram/SecondTest";
import FourthTest from "./diagram/FourthTest";



export default function Diagrams() {
  const { isAuth, currentUser, data, dataAvg } = useSelector((state) => state.auth);
 // console.log(dataAvg);

  if (isAuth === "loading") {
    return (
      <Box className="container">
        <CircularProgress />
      </Box>
    );
  }

  if (data.length === 0) {
    return (
      <Box className="container">
        <Typography variant="h5">
          Пользователь с id {currentUser} не найден
        </Typography>
      </Box>
    );
    }

  return (
    <Box className="container">
          <div>Диаграммы</div>
      <FirstTest />
      <SecondTest />
      <FourthTest />
    </Box>
  );
}
