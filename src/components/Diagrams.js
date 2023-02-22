import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CircularProgress, Box, Typography, Button, Chip } from "@mui/material";
import InputIcon from "@mui/icons-material/Input";
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
          <Typography variant="h5"
            sx={{
            textAlign: 'center'
          }}>
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
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "#b7b6c2",
          padding: "7px",
        }}
      >
        <Typography variant="h5" sx={{ fontSize: { xs: "1em", md: '1.5em', lg: '1.5em' } }}>
          Результаты тестирования
        </Typography>
        <Typography
          variant="h5"
          sx={{
            display: {
              lg: "none",
              md: "none",
            },
            fontSize: { xs: "1em" },
            marginLeft: '2%',
            marginRight: '4%',
          }}
        >{`ID: ${currentUser}`}</Typography>
        <Chip
          label={`ID: ${currentUser}`}
          variant="outlined"
          sx={{
            right: "0.5%",
            marginLeft: "10px",
            display: {
              xs: "none",
              lg: 'flex',
              md: 'flex'
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            position: "fixed",
            top: "7px",
            width: { lg: "8%", md: 'auto'},
            right: "0.5%",
            fontSize: "0.7em",
            display: { xs: "none", md: "flex", lg: "flex" },
          }}
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
        >
          Другой ID
        </Button>

        <InputIcon
          sx={{
            display: { xs: "flex", md: "none", lg: "none" },
          }}
           onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
        />
      </Box>
      {error}
      {noUser()}
      {drowDiagrams()}
    </>
  );
}
