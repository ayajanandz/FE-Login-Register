import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [valid, isValid] = useState("false");
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

  const logincheck = async () => {
    try {
      console.log("user", user);
      let response = await axios.post("http://localhost:8000/login", user);
      //console.log("response", response.data);

      if (response && response.data.body._id) {
        isValid("true");
        localStorage.setItem("login", true);
      } else {
        alert("Invalid Credentials");
      }
    } catch (err) {
      console.log(err);
    }
  };

  
  let login = "";
  useEffect(() => {
    //console.log("Current value of valid is ", valid);
    login = localStorage.getItem("login");
    //console.log(localStorage.getItem("login"));
    if (login === "true") {
      navigate("/homepage");
    } else {
      navigate("/login");
    }
  }, [valid]);

  return (
    <>
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Email.."
          onChange={handleChange}
        ></input>

        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Password.."
          onChange={handleChange}
        ></input>

        <div className="button" onClick={logincheck}>
          Login
        </div>
        <div>
          <h1>or</h1>
        </div>
        <div className="button" onClick={() => navigate("/register")}>
          Register
        </div>
      </div>
    </>
  );
};

export default Login;
