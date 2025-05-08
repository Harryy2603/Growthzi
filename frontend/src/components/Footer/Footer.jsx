import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col logo-col">
          <img src={assets.Logo} alt="" />
          <p className="desc">
            AI-Driven Integrated Digital Marketing Solutions enabler helping Businesses to scale Digitally.
          </p>
        </div>

        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li>About Growthzi</li>
            <li>Contact Us</li>
            <li>Pricing</li>
            <li>Privacy Policy</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Products & Solutions</h3>
          <ul>
            <li>AI Website Builder</li>
            <li>Business Growth</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        <div className="footer-col newsletter-col">
          <h3>Subscribe to our Newsletter</h3>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>
              <IoPaperPlaneOutline />
            </button>
          </div>
          <div className="social-icons">
            <FaLinkedinIn />
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
