import React, { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../../assets/global/assets";

const LoginPopUp = ({ setShowLogin, setShowSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignupClick = (e) => {
    e.preventDefault();
    setShowLogin(false);
    setShowSignup(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Form Submitted");
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <div className="logo-container">
          <img src={assets.Logo} alt="" className="logo" />
          <img
            src={assets.cross_icon}
            alt="close"
            className="close-icon"
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className="divider"></div>

        <h2 className="popup-title">Log in</h2>
        <p className="signup-prompt">
          Don't have an account?{" "}
          <a href="#" onClick={handleSignupClick}>
            Sign up
          </a>
        </p>

        <div className="social-login">
          <button className="social-btn google">
            <span className="social-icon">
              <img
                src={assets.google_icon}
                alt="Google logo"
                className="google-logo"
              />
            </span>
            Continue with Google
          </button>
          <button className="social-btn facebook">
            <span className="social-icon facebook-icon"></span>
            Continue with Facebook
          </button>
          <button className="social-btn apple">
            <span className="social-icon apple-icon"></span>
            Continue with Apple
          </button>
        </div>

        <div className="or-separator">Or continue with email</div>

        <form onSubmit={handleSubmit} className="email-login">
          <div className="input-group">
            <label>Email address or user name</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <div className="password-header">
              <label>Password</label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="show-hide"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.value)}
              required
            />
          </div>

          <div className="form-footer">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="forgot-password">
              Forgot your password?
            </a>
          </div>

          <button type="submit" className="login-btn">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopUp;
