import React from "react";
import "./WhyChoose.css";
import { FaGem, FaStopwatch, FaHandPointer, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.4,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

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
      <motion.div
        className="circle-bg"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Build your website
          <br />
          in minutes with AI
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          No code. No stress. Just launch.
        </motion.p>
        <motion.button
          className="launch-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🚀 Launch Now
        </motion.button>
      </motion.div>

      <motion.div
        className="circle-left"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>
          Why Choose
          <br />
          <span>GROWTHZI ?</span>
        </h2>
      </motion.div>

      <div className="features-right">
        {features.map((item, index) => (
          <motion.div
            className="feature-line"
            key={index}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true }}
          >
            <div className="icon-circle" style={{ background: item.color }}>
              {item.icon}
            </div>
            <div className="feature-text">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
