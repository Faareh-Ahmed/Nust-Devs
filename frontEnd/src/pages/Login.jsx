import React from "react";
import "./loginreg.css";
import Register from './Register'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Login() {

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = event.target.elements;

    try {
      const response = await axios.post('/api/auth/login', {
        email,
        password,
      });

      console.log(response.data); // Store authentication token or redirect
    } catch (error) {
      console.error(error); // Display error message
    }
  };

  return (
    <div className="main-container">
      <div className="container">
        <div className="heading">
          <h1>Login</h1>
        </div>
        <form className="form-grid" onSubmit={handleLoginSubmit}> {/* Attach the handler here */}
          <div className="form-input-container">
            <label for="email" className="form-input-label">Email</label>
            <input type="email" id="email" className="form-input" placeholder="Enter your Email" autocomplete="off" />
          </div>
          <div className="form-input-container">
            <label for="password" className="form-input-label">Password</label>
            <input type="password" id="password" className="form-input" placeholder="Enter your Password"
              minlength="6" autocomplete="off" />
          </div>
          <button type="submit" className="form-input-submit col-span-2">Login</button>
          <div className="to-signup-page col-span-2">
            <p>Don't have an account? Click here to <Link to="/register">Sign Up</Link></p> {/* Use Link component for navigation */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
