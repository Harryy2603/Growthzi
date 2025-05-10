import React, { useEffect } from 'react';
import './Solutions.css';
import { motion, useAnimation } from "framer-motion";
import { assets } from '../../../assets/global/assets';

const cardData = [
  {
    title: 'Single Text Input',
    description: 'Describe your business in few simple words.',
    image: assets.preview,
  },
  {
    title: 'AI Powered Development',
    description: 'Let AI design and create fully functional website in minutes.',
    image: assets.scanner,
    highlight: true,
  },
  {
    title: 'Fully Customisable',
    description: 'Easily edit text, images, and design of generated website.',
    image: assets.customisation,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Solutions = () => {
  const controlsArray = cardData.map(() => useAnimation());

  useEffect(() => {
    const animateSequentially = async () => {
      for (let i = 0; i < controlsArray.length; i++) {
        await controlsArray[i].start('visible');
      }
    };
    animateSequentially();
  }, []);

  return (
    <section className="solution">
      <div className="solutions-container">
        <div className="cards-section">
          {cardData.map((card, index) => (
            <motion.div
              className={`cards ${card.highlight ? 'highlight' : ''}`}
              key={index}
              initial="hidden"
              animate={controlsArray[index]}
              variants={cardVariant}
              whileHover={{ scale: 1.05 }}
            >
              <div className="icon">
                <img src={card.image} alt={card.title} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="preview-section">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            Tailored <span>Solutions</span>
          </motion.h2>

          <div className="browser-window">
            <img src={assets.webPopup} alt="Website preview" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
