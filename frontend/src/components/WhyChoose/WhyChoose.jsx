import React from "react";
import "./WhyChoose.css";
import { FaGem, FaStopwatch, FaHandPointer, FaHeart } from "react-icons/fa";

const features = [
  {
    icon: <FaGem />,
    title: "AI-Powered Website Creation",
    desc: "Build smart, fast, and visually stunning websites with Growthzi’s advanced AI engine.",
    color: "linear-gradient(135deg, #9b59b6, #8e44ad)",
  },
  {
    icon: <FaStopwatch />,
    title: "Launch in Minutes",
    desc: "Save hours with instant deployment — your idea goes live, lightning fast.",
    color: "linear-gradient(135deg, #2980b9, #6dd5fa)",
  },
  {
    icon: <FaHandPointer />,
    title: "Zero Coding Required",
    desc: "Anyone can build a pro-level website with just a few clicks.",
    color: "linear-gradient(135deg, #00c6ff, #0072ff)",
  },
  {
    icon: <FaHeart />,
    title: "Customizable & Scalable",
    desc: "Tailor your site to match your brand and grow as your business evolves.",
    color: "linear-gradient(135deg, #555, #888)",
  },
];

const WhyChoose = () => {
  return (
    <section className="whychoose-section">
      <div className="circle-bg">
        <h2>
          Build your website
          <br />
          in minutes with AI
        </h2>
        <p>No code. No stress. Just launch.</p>
        <button className="launch-btn">🚀 Launch Now</button>
      </div>
      <div className="circle-left">
        <h2>
          Why Choose
          <br />
          <span>GROWTHZI ?</span>
        </h2>
      </div>
      <div className="features-right">
        {features.map((item, index) => (
          <div className="feature-line" key={index}>
            <div className="icon-circle" style={{ background: item.color }}>
              {item.icon}
            </div>
            <div className="feature-text">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
