import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';

function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRegisterSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', formData);
            console.log(response.data); 
        } catch (error) {
            console.error(error); 
            console.error(error); 
        }
    };

    return (
        <div>
            <div className="main-container">
                <div className="container">
                    <div className="heading">
                        <h1>Registration</h1>
                    </div>
                    <form className="form-grid" onSubmit={handleRegisterSubmit}>
                        <div className="form-input-container">
                            <label htmlFor="firstName" className="form-input-label">First Name</label>
                            <input type="text" id="firstName" name="firstName" className="form-input" placeholder="Enter your First Name" autoComplete="off" value={formData.firstName} onChange={handleChange} />
                        </div>
                        <div className="form-input-container">
                            <label htmlFor="lastName" className="form-input-label">Last Name</label>
                            <input type="text" id="lastName" name="lastName" className="form-input" placeholder="Enter your Last Name" autoComplete="off" value={formData.lastName} onChange={handleChange} />
                        </div>
                        <div className="form-input-container">
                            <label htmlFor="email" className="form-input-label">Email</label>
                            <input type="email" id="email" name="email" className="form-input" placeholder="Enter your Email" autoComplete="off" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="form-input-container">
                            <label htmlFor="number" className="form-input-label">Phone Number</label>
                            <input type="number" id="number" name="number" className="form-input" placeholder="Enter your Phone Number" autoComplete="off" pattern="[0-9]{4}-[0-9]{7}" value={formData.number} onChange={handleChange} />
                        </div>
                        <div className="form-input-container">
                            <label htmlFor="password" className="form-input-label">Password</label>
                            <input type="password" id="password" name="password" className="form-input" placeholder="Enter your Password" minLength="6" autoComplete="off" value={formData.password} onChange={handleChange} />
                        </div>
                        <div className="form-input-container">
                            <label htmlFor="confirmPassword" className="form-input-label">Confirm Password</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" className="form-input" placeholder="Confirm your Password" autoComplete="off" value={formData.confirmPassword} onChange={handleChange} />
                        </div>
                        <button type="submit" className="form-input-submit col-span-2">Register</button>
                        <div className="to-login-page col-span-2">
                            <p>Already have an account? Click here to <Link to="/login">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
