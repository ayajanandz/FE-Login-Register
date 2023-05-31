import React, { useState } from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";
import TheatersIcon from "@mui/icons-material/Theaters";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";

const Homepage = (props) => {

// DECLARATIONS

  const navigate = useNavigate();
  let isauth = localStorage.getItem("login");
  let userName = localStorage.getItem("UserName");

  // LOCAL STORAGE SET ITEMS

  const setFalse = () => {
    localStorage.setItem("login", false);
    navigate("/login");
  };
  const resetUsername = () => {
    localStorage.setItem("UserName:", " ")
  }
  
// LOGOUT BUTTON FUNC

 const logoutFnc =()=> {
  resetUsername();
  setFalse();
 }
 


  //  PAGE RENDERING

  if (isauth === "true") {
    return (
      <>
      <h1>
      
      </h1>
        <Button
          variant="contained"
          onClick={() => logoutFnc()}
          className="diffBtn"
        >
          Logout
        </Button>

      

          {/* BUTTON FOR BOOKS AND MOVIES */}

        
        <div className="homepage">
          <h1 className="txt">Your preference..</h1>

          <div className="btn_div">
            <button onClick={() => navigate("/loadbook")} className="btn_book">
              <ImportContactsIcon />
            </button>
            <button onClick={() => navigate("/loadmovie")} className="btn_mov">
              <TheatersIcon />
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>Oops seems like you are logged out. Login to view this page</div>
        <Button
          variant="contained"
          onClick={() => setFalse()}
          className="diffBtn"
        >
          Log Me In
        </Button>
      </>
    );
  }
};

export default Homepage;
