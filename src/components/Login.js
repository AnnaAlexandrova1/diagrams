import { auth, avgData } from "../actions/idInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  OutlinedInput,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";

export default function Login() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();

  const [id, setId] = useState("");

  return (
    <>
      <Box className="container">
        <Typography variant="h4">Введите id</Typography>
        <Typography variant="span">Например 21152</Typography>
        <OutlinedInput
          onInput={(e) => setId(e.target.value)}
          value={id}
          sx={{
            marginTop: "25px",
            marginBottom: "25px",
          }}
        />
        <Button
          variant="contained"
          href="#contained-buttons"
          className="red"
          sx={{ textTransform: "none" }}
          onClick={async () => {
            try {
              await dispatch(auth(id));
              await dispatch(avgData());
              await navigate("/diagrams");
            } catch (err) {
              alert(err);
            }
          }}
        >
          Результаты тестирования
        </Button>
        {isAuth === "loading" ? (
          <CircularProgress
            sx={{
              marginTop: "30px",
            }}
          />
        ) : null}
      </Box>
    </>
  );
}
