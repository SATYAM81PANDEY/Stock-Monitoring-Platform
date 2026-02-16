import React, { useState } from "react";
import { Link } from "react-router-dom";
import { handleError, handleSuccess } from "./util";
import { ToastContainer } from "react-toastify";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError(" email, password are required");
    }
    try {
      const url = "http://localhost:3002/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();
      if (!response.ok) {
        return handleError(result.message);
      }
      const { success, message, jwtToken, name } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("welcome", name);
        window.location.href = "http://localhost:5174/";
      }
    } catch (err) {
      handleError(err.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-primary bg-gradient">
      <div className="signup-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              autoFocus
              placeholder="Enter your email..."
              value={loginInfo.email}
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
              value={loginInfo.password}
            />
          </div>
          <button type="submit">Submit</button>
          <br />
          <span>
            Don't have an account ? <Link to="/signup">Signup</Link>
          </span>
        </form>
        <ToastContainer position="top-right" />
      </div>
    </div>
  );
}

export default Login;
