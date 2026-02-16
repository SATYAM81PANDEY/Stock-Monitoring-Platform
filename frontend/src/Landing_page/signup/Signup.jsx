import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "./util";

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copySignInfo = { ...signupInfo };
    copySignInfo[name] = value;
    setSignupInfo(copySignInfo);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError("name, email, password are required");
    }
    try {
      const url = "http://localhost:3002/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      if (!response.ok) {
        return handleError(result.message);
      }
      const { success, message } = result;
      if (success) {
        handleSuccess(message);
        window.location.href = "http://localhost:5174";
      }
    } catch (err) {
      handleError(err.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-primary bg-gradient">
      <div className="signup-container" id="signup">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              autoFocus
              placeholder="Enter your name..."
              value={signupInfo.name}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              autoFocus
              placeholder="Enter your email..."
              value={signupInfo.email}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              autoFocus
              placeholder="Enter  your assword...."
              value={signupInfo.password}
            />
          </div>
          <button type="submit">Signup</button>
          <br />
          <span>
            Already have an account ? <Link to="/login">Login</Link>
          </span>
        </form>
        <ToastContainer position="top-right" />
      </div>
    </div>
  );
};

export default Signup;
