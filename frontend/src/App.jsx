import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import ScrollTop from './components/ScrollTop/ScrollTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPopUp from './components/SignupPopUp/SignupPopUp';
import LoginPopUp from './components/LoginPopUp/LoginPopUp';
import './App.css';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  

  const isPopupActive = showLogin || showSignup;

  useEffect(() => {
    if (isPopupActive) {
      document.body.classList.add('popup-active');
    } else {
      document.body.classList.remove('popup-active');
    }

    return () => {
      document.body.classList.remove('popup-active');
    };
  }, [isPopupActive]);

  return (
    <>
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} setShowSignup={setShowSignup} />}
      {showSignup && <SignupPopUp setShowSignup={setShowSignup} setShowLogin={setShowLogin} />}
      <Router>
        <ScrollTop />
        <div className={`app ${isPopupActive ? 'blur-background' : ''}`}>
          <Navbar setShowLogin={setShowLogin} setShowSignup={setShowSignup} />
          <Routes>
            <Route path="/" element={<Home setShowLogin={setShowLogin} setShowSignup={setShowSignup} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;