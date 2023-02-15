import "./App.css";
import Login from "./Login";
import Diagrams from "./Diagrams";
import { auth } from "../actions/idInput";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField, Button, Typography } from "@mui/material";


function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  console.log(isAuth);

  return (
    <div className="App">
      {isAuth==='logout' ? <Login /> : <Diagrams/> }
    </div>
  );
}

export default App;
