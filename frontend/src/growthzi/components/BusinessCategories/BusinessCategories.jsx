import React from 'react';
import './BusinessCategories.css';
import { motion } from 'framer-motion';
import { assets } from '../../../assets/global/assets';

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

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const BusinessCategories = () => {
  return (
    <section className="business">
      <div className="business-container">
        <h2>
          Tailored <span>Solutions</span> for <br /> Every Business
        </h2>

        <motion.div
          className="cards-wrapper"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {categories.map((item, index) => (
            <motion.div
              key={index}
              className="business-card"
              variants={card}
            >
              <img src={item.image} alt="category preview" className="card-image" />
              <div className="card-text">
                <h3>
                  {item.titleLine1} <br /> <span>{item.titleLine2}</span>
                </h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessCategories;
