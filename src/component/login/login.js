// import React from "react";
// import "./login.css";
// import "../navbar/navbar.css";
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Loadbook from "../loadedData/loadbook";
// import Loadmovie from "../loadedData/loadmovie";
// import Homepage from "../homepage/homepage";
// import Register from "../register/register";

// const Login = (props) => {
//   let { isUserLoggedIn } = props;
//   const navigate = useNavigate();
//   //const [userLoginDetails, setUserLoginDetails] = useState({});
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };

//   const login = () => {
//     axios
//       .post("http://localhost:8000/login", user)
//       .then((res) => {
//         alert(JSON.stringify(res.data.body));
//         props.callBackFunc(isUserLoggedIn === 0 ? 1 : 0);
//       })
//       .catch((error) => {
//         console.log(
//           "Error occured in axios post req - ",
//           JSON.stringify(error)
//         );
//       });
//   };

//   return (
//     <>
//       <div className="login">
//         <h1>Login</h1>
//         <input
//           type="text"
//           name="email"
//           value={user.email}
//           placeholder="Email.."
//           onChange={handleChange}
//         ></input>

//         <input
//           type="password"
//           name="password"
//           value={user.password}
//           placeholder="Password.."
//           onChange={handleChange}
//         ></input>

//         <div className="button" onClick={login}>
//           Login
//         </div>
//         <div>
//           <h1>or</h1>
//         </div>
//         <div className="button" onClick={() => navigate("/register")}>
//           Register
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
