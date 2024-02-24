import React from "react";

function Login() {
    return (    <div className="main-container">
    <div className="container">
        <div className="heading">
            <h1>Login</h1>
        </div>
        <form className="form-grid">
            <div className="form-input-container">
                <label for="email" className="form-input-label">Email</label>
                <input type="email" id="email" className="form-input" placeholder="Enter your Email" autocomplete="off" />
            </div>
            <div className="form-input-container">
                <label for="password" className="form-input-label">Password</label>
                <input type="password" id="password" className="form-input" placeholder="Enter your Password"
                    minlength="6" autocomplete="off" />
            </div>
            <button type="submit" className="form-input-submit col-span-2">Register</button>
            <div className="to-signup-page col-span-2">
                <p>Don't have an account? Click here to <a href="signup.html">Sign Up</a></p>
            </div>
        </form>
    </div>
</div>);
}

export default Login;