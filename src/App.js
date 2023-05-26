import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Homepage from "./component/homepage/homepage";
import Register from "./component/register/register";
import Login from "./component/login/login";
import Navbar from "./component/navbar/navbar";
import "./component/navbar/navbar.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Loadbook from "./component/loadedData/loadbook";
import Loadmovie from "./component/loadedData/loadmovie";
import axios from "axios";

function App() {
  

  return (
    <>
      <Navbar />

      
      
      <Routes>
      <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<Homepage/>} />
        <Route path="/loadbook" element={<Loadbook />} />
        <Route path="/loadmovie" element={<Loadmovie />} />
        
      </Routes>
    </>
  );
}

export default App;
