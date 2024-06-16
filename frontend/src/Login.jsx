import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "./components/AuthContext";

function Login() {
  const [fname, setFname] = useState();
  const [pass, setPass] = useState();
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { fname, pass })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          login();
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <center>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            autoComplete="off"
            name="fname"
            onChange={(e) => setFname(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            autoComplete="off"
            name="pass"
            onChange={(e) => setPass(e.target.value)}
          />
          <button type="submit">Login</button>
          <Link to="/signup">Signup</Link>
        </form>
      </center>
    </div>
  );
}

export default Login;
