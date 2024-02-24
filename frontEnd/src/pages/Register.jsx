import React from 'react';
import './index.css'

function Register(){
    return ( 
        <div>
             <div className="main-container">
        <div className="container">
            <div className="heading">
                <h1>Registration</h1>
            </div>
            <form className="form-grid">
                <div className="form-input-container">
                    <label for="first-name" className="form-input-label">First Name</label>
                    <input type="text" id="first-name" className="form-input" placeholder="Enter your First Name" autocomplete="off" />
                </div>
                <div className="form-input-container">
                    <label for="last-name" className="form-input-label">Last Name</label>
                    <input type="text" id="last-name" className="form-input" placeholder="Enter your Last Name" autocomplete="off" />
                </div>
                <div className="form-input-container">
                    <label for="email" className="form-input-label">Email</label>
                    <input type="email" id="email" className="form-input" placeholder="Enter your Email" autocomplete="off" />
                </div>
                <div className="form-input-container">
                    <label for="number" className="form-input-label">Phone Number</label>
                    <input type="tel" id="number" className="form-input" placeholder="Enter your Phone Number"
                        pattern="[0-9{4}-[0-9]{7}]" autocomplete="off" />
                </div>
                <div className="form-input-container">
                    <label for="password" className="form-input-label">Password</label>
                    <input type="password" id="password" className="form-input" placeholder="Enter your Password"
                        minlength="6" autocomplete="off" />
                </div>
                <div className="form-input-container">
                    <label for="confirm-password" className="form-input-label">Confirm Password</label>
                    <input type="password" id="confirm-password" className="form-input" placeholder="Confirm your Password" autocomplete="off" />
                </div>
                <button type="submit" className="form-input-submit col-span-2">Register</button>
                <div className="to-login-page col-span-2">
                    <p>Already have an account? Click here to <a href="login.html">Log In</a></p>
                </div>
            </form>
        </div>
    </div>
        </div>
    );
}

export default Register;