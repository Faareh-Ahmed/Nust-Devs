import React from 'react';
import './loginreg.css'
import login from './Login'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Register() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        password: ""
    });


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            // Send the form data to your backend API endpoint
            const apiUrl = "/api/auth/login"; // Replace with your backend API URL
            const response = await axios.post(apiUrl, formData);

            console.log("data bhej diya");
            console.log(formData);
            // Handle response if needed
            console.log("Data sent successfully:", response.data);

            // Display a prompt on success
            //   window.alert(
            //     `Person added successfully!\nUsername: ${response.data.username}\nPassword: ${response.data.password}`
            //   );

            // Clear the form fields
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                number: "",
                password: ""
            });
        } catch (error) {
            console.error("Error sending data:", error);

            console.log(formData);
            console.log("masla ban gaya");
            console.error("Error sending data:", error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    return (
        <div>
            <div className="main-container">
                <div className="container">
                    <div className="heading">
                        <h1>Registration</h1>
                    </div>
                    <form className="form-grid">
                        <div className="form-input-container">
                            <label for="firstName" className="form-input-label">First Name</label>
                            <input type="text" id="first-name" className="form-input" placeholder="Enter your First Name" onChange={handleInputChange}  value={formData.firstName}
                                autocomplete="off" />
                        </div>
                        <div className="form-input-container">
                            <label for="lastName" className="form-input-label">Last Name</label>
                            <input type="text" id="last-name" className="form-input" placeholder="Enter your Last Name" onChange={handleInputChange}  value={formData.lastName} autocomplete="off" />
                        </div>
                        <div className="form-input-container">
                            <label for="email" className="form-input-label">Email</label>
                            <input type="email" id="email" className="form-input" placeholder="Enter your Email" onChange={handleInputChange}  value={formData.email} autocomplete="off" />
                        </div>
                        <div className="form-input-container">
                            <label for="number" className="form-input-label">Phone Number</label>
                            <input type="tel" id="number" className="form-input" placeholder="Enter your Phone Number"
                                pattern="[0-9{4}-[0-9]{7}]" onChange={handleInputChange}  value={formData.number} autocomplete="off" />
                        </div>
                        <div className="form-input-container">
                            <label for="password" className="form-input-label">Password</label>
                            <input type="password" id="password" className="form-input" placeholder="Enter your Password"
                                minlength="6" onChange={handleInputChange}  value={formData.password} autocomplete="off" />
                        </div>
                        <div className="form-input-container">
                            <label for="confirm-password" className="form-input-label">Confirm Password</label>
                            <input type="password" id="confirm-password" className="form-input" placeholder="Confirm your Password" autocomplete="off" />
                        </div>
                        <button type="submit" className="form-input-submit col-span-2" onClick={handleRegisterSubmit}>Register</button>
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