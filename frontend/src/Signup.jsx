import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [fname, setFname] = useState();
  const [pass, setPass] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", { fname, pass })
      .then((result) => {
        console.log(result);
        navigate("/login");
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
            placeholder="Enter Password"
            autoComplete="off"
            name="pass"
            onChange={(e) => setPass(e.target.value)}
          />
          <button type="submit">Register</button>
          <Link to="/login">Login</Link>
        </form>
      </center>
    </div>
  );
}

export default Signup;
