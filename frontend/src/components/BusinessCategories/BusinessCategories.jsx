import React from 'react';
import './BusinessCategories.css';
import { motion } from 'framer-motion';
import { assets } from '../../assets/assets';

const categories = [
  {
    titleLine1: 'For Offline Businesses',
    titleLine2: 'Go Online',
    description:
      'Launch a professional website in minutes no coding needed. Attract customers and boost sales with AI-powered marketing.',
    image: assets.offlineBusiness,
  },
  {
    titleLine1: 'For Online Businesses',
    titleLine2: 'Scale Faster with AI',
    description:
      'Build a high-converting website with seamless e-commerce tools. Drive traffic, generate leads, and grow your sales effortlessly.',
    image: assets.onlineBusiness,
  },
  {
    titleLine1: 'For Individuals & Professionals',
    titleLine2: 'Build your Personal Brand',
    description:
      'Create a personal website in minutes to showcase your work. Grow your audience with AI layouts, SEO, and smart marketing.',
    image: assets.brand,
  },
];

const BusinessCategories = () => {
  return (
    <motion.section
        className="business"
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
    >
        <div className="business-container">
        <h2>
            Tailored <span>Solutions</span> for <br /> Every Business
        </h2>
        <div className="cards-wrapper">
            {categories.map((item, index) => (
            <div className="business-card" key={index}>
                <img src={item.image} alt="category preview" className="card-image" />
                {/* <img src={logoIcon} alt="icon" className="icon-overlay" /> */}
                <div className="card-text">
                <h3>
                    {item.titleLine1} <br /> <span>{item.titleLine2}</span>
                </h3>
                <p>{item.description}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    </motion.section>
  );
};

export default BusinessCategories;
