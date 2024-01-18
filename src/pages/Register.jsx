import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RegisterStyle.scss";
import { registerRoute } from "../utils/APIRoutes";
import { getData } from "../utils/APIService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Register() {
  const nav = useNavigate();
  const [values, setVales] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await getData(registerRoute, values);
    if (res.status === 200) {
      for (const key in res.errors) {
        toast.error(res.errors[key].msg, {
          position: "bottom-right",
          autoClose: 8000,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      }
    } else {
      nav("/login");
    }
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
            name="name"
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
            name="confirm_password"
            onChange={handleChange}
          />
          <button type="submit">Create Account</button>
          <span>
            Already have an account ? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
