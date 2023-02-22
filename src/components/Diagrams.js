import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CircularProgress, Box, Typography, Button, Chip } from "@mui/material";
import { logout } from "../reducers/authReduser";
import FirstTest from "./diagram/FirstTest";
import SecondTest from "./diagram/SecondTest";
import ThirdTest from "./diagram/ThirdTest";
import FourthTest from "./diagram/FourthTest";
import Fifth from "./diagram/Fifth";
import { useEffect } from "react";
import { display, width } from "@mui/system";


export default function Diagrams() {
  const { isAuth, currentUser, data, dataAvg } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const error =
    isAuth === "error" ? (
      <Box className="container">
        <div>Ошибка, попробуйте еще раз</div>
      </Box>
    ) : null;

  const noUser = () => {
    if (data.length === 0 && isAuth !== "loading") {
      return (
        <Box className="container">
          <Typography variant="h5">
            Пользователь с id {currentUser} не найден
          </Typography>
        </Box>
      );
    } else {
      return null;
    }
  };

  const drowDiagrams = () => {
    if (isAuth === "idle" && data.length > 0) {
      return (
        <Box className="container">
          <FirstTest />
          <SecondTest />
          <ThirdTest />
          <FourthTest />
          <Fifth />
        </Box>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          // height: '30px',
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "#b7b6c2",
          padding: "7px",
        }}
      >
        <Typography variant="h5">Результаты тестирования</Typography>
        <Chip
          label={`ID: ${currentUser}`}
          variant="outlined"
          sx={{
            right: "0.5%",
            marginLeft: "10px",
          }}
        />
        <Button
          variant="contained"
          sx={{
            position: "fixed",
            top: "7px",
            width: "8%",
            right: "0.5%",
            fontSize: "0.7em",
          }}
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
        >
          Другой ID
        </Button>
      </Box>
      {error}
      {noUser()}
      {drowDiagrams()}
    </>
  );
}
