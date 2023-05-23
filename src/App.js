import React from "react";
import { useState } from "react";
import "./App.css";
import Homepage from "./component/homepage/homepage";
import Register from "./component/register/register";
import Login from "./component/login/login";
import Navbar from "./component/navbar/navbar";
import "./component/navbar/navbar.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loadbook from "./component/loadedData/loadbook";
import Loadmovie from "./component/loadedData/loadmovie";
import axios from "axios";
//import { useNavigate } from "react-router-dom";

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(0);
  //let callback = (valueFromChild) => setIsLoggedIn(valueFromChild);
  console.log("isLogedin", isLoggedIn);
  //const navigate = useNavigate();
  //const [userLoginDetails, setUserLoginDetails] = useState({});
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios
      .post("http://localhost:8000/login", user)
      .then((res) => {
        alert(JSON.stringify(res.data.body));
        //props.callBackFunc(isUserLoggedIn === 0 ? 1 : 0);
      })
      .catch((error) => {
        console.log(
          "Error occured in axios post req - ",
          JSON.stringify(error)
        );
      });
  };
  return (
    <>
      <Navbar />
      <div className="App">
        {/* <Login callbackfunc={callback} isUserLoggedIn={isLoggedIn} /> */}
        <Router>
          <Routes>
            {/* <Route
              exact
              path="/"
              element={
                isLoggedIn? (
                  <Homepage />
                ) : (
                  <Login callBackFunc={callback} isUserLoggedIn={isLoggedIn} />
                )
              }
            ></Route> */}
            <Route path="/" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/loadbook" element={<Loadbook />}></Route>
            <Route path="/loadmovie" element={<Loadmovie />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;