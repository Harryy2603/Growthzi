import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Plans.css";

const plans = [
  {
    price: "₹2,000",
    type: "Intro",
    desc: "Unlimited editing & customization",
    features: [
      "All limited links",
      "Link 1 custom domain",
      "Free SSL certificate",
      "Dashboard access",
      "SEO support",
    ],
  },
  {
    price: "₹8,000",
    type: "Base",
    desc: "For more businesses that want to optimize web queries",
    features: [
      "All limited links",
      "Link 1 custom domain",
      "Chat support",
      "Dashboard access",
      "SEO support",
    ],
  },
  {
    price: "₹15,000",
    type: "Pro",
    desc: "For most businesses that want to optimize web queries",
    features: [
      "All limited links",
      "Own analysis platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
  },
  {
    price: "$200/month",
    type: "Enterprise",
    desc: "For most businesses that want to optimize web queries",
    features: [
      "All limited links",
      "Link 1 custom domain",
      "Chat support",
      "Dashboard access",
      "SEO support",
    ],
  },
];

const Plans = () => {
  return (
    <motion.section
      className="steps"
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="plans-section">
        <h2>
          Tailored <span>Plans</span> For You
        </h2>
        <div className="plans-container">
          {plans.map((plan, index) => (
            <div className="plan-card" key={index}>
              <div className="price">{plan.price}</div>
              <div className="type">{plan.type}</div>
              <div className="desc">{plan.desc}</div>
              <ul className="features">
                {plan.features.map((item, i) => (
                  <li key={i}>
                    <FaCheck className="tick" /> {item}
                  </li>
                ))}
              </ul>
              <button className="choose-btn">Choose plan</button>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Plans;
