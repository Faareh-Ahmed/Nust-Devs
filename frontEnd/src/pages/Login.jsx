import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import axios from "axios"; 
import './loginreg.css';


function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", formData);

      console.log("Login successful:", response.data); 
      // Redirect to home page
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error); // Display error message
    }
  };

  return (
    <div className="main-container">
      <div className="container">
        <div className="heading">
          <h1>Login</h1>
        </div>
        <form className="form-grid" onSubmit={handleLoginSubmit}>
          <div className="form-input-container">
            <label htmlFor="email" className="form-input-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your Email"
              autoComplete="off"
            />
          </div>
          <div className="form-input-container">
            <label htmlFor="password" className="form-input-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your Password"
              minLength="6"
              autoComplete="off"
            />
          </div>
          <button type="submit" className="form-input-submit col-span-2">
            Login
          </button>
          <div className="to-signup-page col-span-2">
            <p>
              Don't have an account? Click here to{" "}
              <Link to="/register">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
