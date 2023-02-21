import "./App.css";
import { Routes, Route } from 'react-router-dom';

import Login from "./Login";
import Diagrams from "./Diagrams";
import { auth } from "../actions/idInput";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField, Button, Typography } from "@mui/material";


function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="diagrams" element={<Diagrams/>}/>
      </Routes>
    </div>
  );
}

export default App;
