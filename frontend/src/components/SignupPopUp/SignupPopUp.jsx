import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './SignupPopUp.css';

const SignupPopUp = ({setShowSignup,setShowLogin}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
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
    console.log('SignUp Form Submitted');
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <div className="logo-container">
          <img src={assets.Logo} alt="" className='logo'/>
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
          Already have an account? <a href="#" onClick={handleLoginClick}>Log in</a>
        </p>
        
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
              <div className="country-code">
                <img src={"https://flagcdn.com/w20/us.png"} alt="US" className="flag-icon" />
                <span className="code">+1</span>
              </div>
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
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="password-hint">Use 8 or more characters with a mix of letters, numbers & symbols</p>
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
                By creating an account, I agree to our <a href="#">Terms of use</a>
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
                By creating an account, I am also consenting to receive SMS messages and emails, including product new feature updates, events, and marketing promotions.
              </label>
            </div>
          </div>
          
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPopUp;