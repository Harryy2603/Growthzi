import React from 'react';
import './Launch.css';
import { motion } from 'framer-motion';
import { assets } from '../../assets/assets';

const Launch = () => {
  return (
    <motion.section
        className="launch"
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
    >

      <div className="launch-left">
        <h1>
          Launch your website <span>instantly</span>
        </h1>
        <p>
          Turn your business or idea into a fully functional website in minutes powered by AI. No technical skills required!
        </p>
        <button>Launch Now</button>
      </div>
      <div className="launch-right">
        <img src={assets.Launch_img} alt="Website Preview" />
      </div>
    </motion.section>
  );
};

export default Launch;
