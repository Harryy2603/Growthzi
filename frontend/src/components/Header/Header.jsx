import React from 'react';
import './Header.css';
import {assets} from '../../assets/assets'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-tagline">
          <span className="generate-text">✨ GENERATE YOUR WEBSITE WITH AI</span>
        </div>
        
        <div className="header-title">
          <h1>
            Build & scale your dream<br />
            Website with <span className="ai-text">AI</span>
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
              <label htmlFor="businessDescription">Describe your Business*</label>
              <input type="text" id="businessDescription" required />
            </div>
            
            <div className="form-field">
              <label htmlFor="businessType">Type of Business*</label>
              <input type="text" id="businessType" required />
            </div>
            
            <button className="generate-btn" type="submit">
              <span className="icon">✨</span> Generate
            </button>
          </form>
        </div>
      </div>
      <div className="metrics-container">
          <img src={assets.Fun_Fact} alt="" />
      </div>
    </header>
  );
};

export default Header;