import React from "react";
import "./Header.css";
import Typewriter from "typewriter-effect";
import CountUp from "../CountUp/CountUp";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="star-group top-left">
        {[...Array(3)].map((_, i) => (
          <svg key={i} viewBox="0 0 60 60">
            <path d="M30 0 C33 18 42 27 60 30 C42 33 33 42 30 60 C27 42 18 33 0 30 C18 27 27 18 30 0 Z" />
          </svg>
        ))}
      </div>

      <div className="star-group bottom-right">
        {[...Array(3)].map((_, i) => (
          <svg key={i} viewBox="0 0 60 60">
            <path d="M30 0 C33 18 42 27 60 30 C42 33 33 42 30 60 C27 42 18 33 0 30 C18 27 27 18 30 0 Z" />
          </svg>
        ))}
      </div>

      <div className="header-container">
        <div className="header-tagline">
          <span className="generate-text">
            ✨ GENERATE YOUR WEBSITE WITH AI
          </span>
        </div>

        <div className="header-title" >
          <h1>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    'Build & scale your dream <br /> Website with <span class="ai-text">AI</span>'
                  )
                  .callFunction(() => {})
                  .start();
              }}
              options={{
                delay: 60,
                cursor: "",
              }}
            />
          </h1>
        </div>

        <div className="form-container">
          <form className="generate-form">
            <div className="form-field">
              <label htmlFor="businessName">Name of your Business*</label>
              <input type="text" id="businessName" required />
            </div>
            <div className="form-field">
              <label htmlFor="businessLocation">Business Location*</label>
              <input type="text" id="businessLocation" required />
            </div>
            <div className="form-field">
              <label htmlFor="businessDescription">
                Describe your Business*
              </label>
              <input type="text" id="businessDescription" required />
            </div>
            <div className="form-field">
              <label htmlFor="businessType">Type of Business*</label>
              <input type="text" id="businessType" required />
            </div>
            <button onClick={()=> navigate("/generateWebsite")} className="generate-btn" type="submit">
              <span className="icon">✨</span> Generate
            </button>
          </form>
        </div>
      </div>

      <div className="metrics-container">
        <div className="metrics-card">
          <div className="metric">
            <CountUp target={15000} suffix="+" />
            <p>Website Created</p>
          </div>
          <div className="metric">
            <CountUp target={30000} />
            <p>Total Download</p>
          </div>
          <div className="metric">
            <CountUp target={10000} />
            <p>Customer</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
