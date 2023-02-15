import { auth } from "../actions/idInput";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, OutlinedInput, Button, Typography } from "@mui/material";

export default function Login() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth);
  
  const [id, setId] = useState('')

    return (
        <Box className='container'>
        <Typography variant="h4">Введите id</Typography>
        <OutlinedInput
          
          onInput={(e) => setId(e.target.value)
          }
          value={id}
          sx={{
            marginTop: "25px",
            marginBottom: "25px",
          }}
        />
        <Button
          variant="contained"
          href="#contained-buttons"
          sx={{ textTransform: "none" }}
          onClick={() => dispatch(auth(id))}
        >
          Резульатты тестирования
        </Button>
      </Box>
    )
}