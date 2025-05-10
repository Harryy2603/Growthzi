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

        <div className="header-title">
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
              <select id="businessType" required>
                <option value="">Select Business Type </option>
                <option value="Cafe">Cafe</option>
                <option value="Salons, Spas & Barbershops">
                  Salons, Spas & Barbershops
                </option>
                <option value="Gyms & Fitness Studios">
                  Gyms & Fitness Studios
                </option>
                <option value="Hotels, Homestays & Resorts">
                  Hotels, Homestays & Resorts
                </option>
                <option value="Repair Services">Repair Services</option>
                <option value="Doctors & Clinics">Doctors & Clinics</option>
                <option value="Lawyers & Law Firms">Lawyers & Law Firms</option>
                <option value="Chartered Accountants">
                  Chartered Accountants
                </option>
                <option value="Real Estate Agents">Real Estate Agents</option>
                <option value="Consultants">
                  Consultants (business, finance, career)
                </option>
                <option value="Photographers">Photographers</option>
                <option value="Designers">
                  Designers (UX/UI, graphic, interior)
                </option>
                <option value="Writers, Bloggers">Writers, Bloggers</option>
                <option value="Musicians, Artists, Performers">
                  Musicians, Artists, Performers
                </option>
                <option value="Clothing & Apparel Stores">
                  Clothing & Apparel Stores
                </option>
                <option value="Jewelry & Handicrafts">
                  Jewelry & Handicrafts
                </option>
                <option value="Home Decor & Furniture Shops">
                  Home Decor & Furniture Shops
                </option>
                <option value="Grocery Stores">Grocery Stores</option>
                <option value="Pet Supplies">Pet Supplies</option>
                <option value="Schools & Coaching Institutes">
                  Schools & Coaching Institutes
                </option>
                <option value="Online Tutors">Online Tutors</option>
                <option value="Religious Organizations">
                  Religious Organizations
                </option>
                <option value="Event Planners & Wedding Services">
                  Event Planners & Wedding Services
                </option>
                <option value="Travel Agencies">Travel Agencies</option>
                <option value="Astrologers & Tarot Readers">
                  Astrologers & Tarot Readers
                </option>
                <option value="Influencers">Influencers</option>
              </select>
            </div>
            <button
              onClick={() => navigate("/generateWebsite")}
              className="generate-btn"
              type="submit"
            >
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
