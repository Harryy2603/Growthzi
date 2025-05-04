import React from 'react';
import './Navbar.css';
import { assets } from "../../assets/assets";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {

    const [menu,setMenu] = useState("home");

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/"><img src={assets.Logo} alt="GROWTHZI Logo" /></Link>
        </div>
        
        <div className="navbar-links">
          <Link to="/" onClick={()=>setMenu("home")} className={menu === "home"?"navbar-link active":""}>Home</Link>
          <Link to="/products" onClick={()=>setMenu("products")} className={menu === "products"?"navbar-link active":""}>Products</Link>
          <Link to="/solution" onClick={()=>setMenu("solution")} className={menu === "solution"?"navbar-link active":""}>Solution</Link>
          <Link to="/resources" onClick={()=>setMenu("resources")} className={menu === "resources"?"navbar-link active":""}>Resources</Link>
        </div>
        
        <div className="navbar-buttons">
          <button className="sign-in-btn">Sign In</button>
          <button className="sign-up-btn">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;