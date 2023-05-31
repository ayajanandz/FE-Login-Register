import React from "react";
import Landing from "./component/landing/landing";
import "./App.css";
import Homepage from "./component/homepage/homepage";
import Register from "./component/register/register";
import Login from "./component/login/login";
import Navbar from "./component/navbar/navbar";
import "./component/navbar/navbar.css";
import { Routes, Route } from "react-router-dom";
import Loadbook from "./component/loadedData/loadbook";
import Loadmovie from "./component/loadedData/loadmovie";

function App() {
  localStorage.setItem("login", false);
  return (
    <>
      <Navbar />

      <Routes>
      <Route path="/" element={<Landing />}/>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/loadbook" element={<Loadbook />} />
        <Route path="/loadmovie" element={<Loadmovie />} />
      </Routes>
    </>
  );
}

export default App;
