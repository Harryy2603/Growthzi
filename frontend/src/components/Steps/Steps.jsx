import React from "react";
import "./Steps.css";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const Steps = () => {
  return (
    <motion.section
      className="steps"
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="website-builder">
      <div className="container">
        <h1 className="main-heading">Create your website in <span className="purple-text">3 Steps</span></h1>
        
        <div className="card-grid">
          <div className="row">
            <div className="card">
              <div className="card-dot"></div>
              <h2 className="card-title">Single Text Input</h2>
              <p className="card-text">
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                Ipsum has been the industry's standard dummy text ever since the 1500s, when 
                an unknown printer took a galley of type and scrambled it to make a type 
                specimen book.
              </p>
            </div>
            <div className="image-container">
              <img src={assets.Overlay_and_Shadow} alt="Person working at desk" />
            </div>
          </div>
          
          
          <div className="row">
            <div className="image-container ai-image-container">
              <img src={assets.AI} alt="" />
            </div>
            <div className="card">
              <div className="card-dot"></div>
              <h2 className="card-title">AI Powered Development</h2>
              <p className="card-text">
                Lorem ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 
                1500s, when an unknown printer took a galley of type and scrambled it to 
                make a type specimen book.
              </p>
            </div>
          </div>
        
          <div className="row">
            <div className="card">
              <div className="card-dot"></div>
              <h2 className="card-title">Fully Customisable</h2>
              <p className="card-text">
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                Ipsum has been the industry's standard dummy text ever since the 1500s, when 
                an unknown printer took a galley of type and scrambled it to make a type 
                specimen book.
              </p>
            </div>
            <div className="image-container">
              <img src={assets.Overlay_and_Shadow} alt="Person working at desk" />
            </div>
          </div>
        </div>
        
        {/* Generate Button */}
        <div className="button-container">
          <button className="generate-button">
            ✨<span/> Generate
          </button>
        </div>
      </div>
    </div>
    </motion.section>
  );
};

export default Steps;
