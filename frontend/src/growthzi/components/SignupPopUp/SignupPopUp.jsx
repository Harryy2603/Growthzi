import React, { useState } from "react";
import { assets } from '../../../assets/global/assets';
import CountryCodeDropdown from "../CountryCodeDropdown/CountryCodeDropdown";
import "./SignupPopUp.css";

const countryCodes = [
  { code: "+1", name: "United States", iso: "us" },
  { code: "+91", name: "India", iso: "in" },
  { code: "+44", name: "United Kingdom", iso: "gb" },
  { code: "+1", name: "Canada", iso: "ca" },
  { code: "+61", name: "Australia", iso: "au" },
  { code: "+49", name: "Germany", iso: "de" },
  { code: "+33", name: "France", iso: "fr" },
  { code: "+81", name: "Japan", iso: "jp" },
  { code: "+86", name: "China", iso: "cn" },
  { code: "+55", name: "Brazil", iso: "br" },
  { code: "+27", name: "South Africa", iso: "za" },
  { code: "+7", name: "Russia", iso: "ru" },
  { code: "+234", name: "Nigeria", iso: "ng" },
  { code: "+52", name: "Mexico", iso: "mx" },
  { code: "+39", name: "Italy", iso: "it" },
  { code: "+34", name: "Spain", iso: "es" },
  { code: "+46", name: "Sweden", iso: "se" },
  { code: "+41", name: "Switzerland", iso: "ch" },
  { code: "+31", name: "Netherlands", iso: "nl" },
  { code: "+82", name: "South Korea", iso: "kr" },
];

const SignupPopUp = ({ setShowSignup, setShowLogin }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [consentSMS, setConsentSMS] = useState(false);

  const handleLoginClick = (e) => {
    e.preventDefault();
    setShowSignup(false);
    setShowLogin(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("SignUp Form Submitted");
  };

  return (
    <div className="signup-popup-container">
      <div className="popup">
        <div className="logo-container">
          <img src={assets.Logo} alt="" className="logo" />
          <img
            src={assets.cross_icon}
            alt="close"
            className="close-icon"
            onClick={() => setShowSignup(false)}
          />
        </div>
        <div className="divider"></div>

        <h2 className="popup-title">Sign Up</h2>
        <p className="login-prompt">
          Already have an account?{" "}
          <a href="#" onClick={handleLoginClick}>
            Log in
          </a>
        </p>

        <div className="social-login">
          <button className="social-btn google">
            <span className="social-icon google-icon"></span>
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

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="name-row">
            <div className="input-group half">
              <label>First name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="input-group half">
              <label>Last name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Phone number</label>
            <div className="phone-input">
              <CountryCodeDropdown
                countryCodes={countryCodes}
                selected={countryCode}
                onSelect={setCountryCode}
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="password-hint">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </p>
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="checkbox-group">
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
              />
              <label htmlFor="terms">
                By creating an account, I agree to our{" "}
                <a href="#">Terms of use</a>
              </label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                id="sms"
                checked={consentSMS}
                onChange={() => setConsentSMS(!consentSMS)}
              />
              <label htmlFor="sms">
                I consent to receive SMS and emails, including updates, events,
                and promotions.
              </label>
            </div>
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPopUp;
