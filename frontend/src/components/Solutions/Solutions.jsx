import React from 'react';
import './Solutions.css';
import { motion } from "framer-motion";
import { assets } from '../../assets/assets';

const cardData = [
  {
    title: 'Single Text Input',
    description: 'Describe your business in few simple words.',
    icon: '🔍',
  },
  {
    title: 'AI Powered Development',
    description: 'Let AI design and create fully functional website in minutes.',
    icon: '⚡',
    highlight: true,
  },
  {
    title: 'Fully Customisable',
    description: 'Easily edit text, images, and design of generated website.',
    icon: '⚙️',
  },
];

const Solutions = () => {
  return (
    <motion.section
      className="solution"
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
    >
        <div className="solutions-container">
        <div className="cards-section">
            {cardData.map((card, index) => (
            <div
                className={`cards ${card.highlight ? 'highlight' : ''}`}
                key={index}
            >
                <div className="icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
            </div>
            ))}
        </div>

        <div className="preview-section">
            <h2>
            Tailored <span>Solutions</span>
            </h2>
            <div className="browser-window">
            <img src={assets.webPopup} alt="" />
            </div>
        </div>
        </div>
    </motion.section>
  );
};

export default Solutions;
