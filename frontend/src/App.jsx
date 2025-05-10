import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './growthzi/components/Navbar/Navbar'
import Home from './growthzi/pages/Home/Home';
import ScrollTop from './growthzi/components/ScrollTop/ScrollTop';
import SignupPopUp from './growthzi/components/SignupPopUp/SignupPopUp';
import LoginPopUp from './growthzi/components/LoginPopUp/LoginPopUp';
import GenerateWebsite from './growthzi/pages/GenerateWebsite/GenerateWebsite';
import './App.css';

const AppContent = ({ showLogin, setShowLogin, showSignup, setShowSignup, isPopupActive }) => {
  const location = useLocation();

  return (
    <>
      <ScrollTop />
      <div className={`app ${isPopupActive ? 'blur-background' : ''}`}>
        {location.pathname === '/' && (
          <Navbar setShowLogin={setShowLogin} setShowSignup={setShowSignup} />
        )}
        <Routes>
          <Route path="/" element={<Home setShowLogin={setShowLogin} setShowSignup={setShowSignup} />} />
          <Route path="/generateWebsite" element={<GenerateWebsite />} />
        </Routes>
      </div>
    </>
  );
};

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const isPopupActive = showLogin || showSignup;

  useEffect(() => {
    document.body.classList.toggle('popup-active', isPopupActive);
    return () => document.body.classList.remove('popup-active');
  }, [isPopupActive]);

  return (
    <>
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} setShowSignup={setShowSignup} />}
      {showSignup && <SignupPopUp setShowSignup={setShowSignup} setShowLogin={setShowLogin} />}
      <Router>
        <AppContent
          showLogin={showLogin}
          setShowLogin={setShowLogin}
          showSignup={showSignup}
          setShowSignup={setShowSignup}
          isPopupActive={isPopupActive}
        />
      </Router>
    </>
  );
};

export default App;
