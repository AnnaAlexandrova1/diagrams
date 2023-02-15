import { useSelector } from "react-redux";
import { CircularProgress, Box, Typography } from "@mui/material";
import FirstTest from "./diagram/FirstTest";



export default function Diagrams() {
  const { isAuth, currentUser, data } = useSelector((state) => state.auth);
  console.log(data);

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
          <FirstTest/>
    </Box>
  );
}
