import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterStyle.scss";
export default function Register() {
  const [values, setVales] = useState({
    username: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setVales({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="RegisterContainer">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Confirmed Password"
            name="confirmedPassword"
            onChange={handleChange}
          />
          <button type="submit">Create Account</button>
          <span>
            Already have an account ? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
    </>
  );
}
