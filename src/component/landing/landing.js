import React from "react";
import "./landing.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="heading">
      <h1>
        Hello!
      </h1>
        <h4>
            You want to watch a movie or read a book but you are worried that you might end up wasting 
            your precious time
            ..we have a solution read what others  <br/>have to say about the movie 
            or the books. Choose the best one and don't forget to have a look at the comments
            section. 
        </h4>
      </div>
       
      <Button
        variant="contained"
        onClick={() => navigate("/login")}
        className="diffBtn">
        Log Me In !
      </Button>
      
    </>
  );
};

export default Landing;
