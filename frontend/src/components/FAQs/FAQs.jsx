import React, { useState } from "react";
import "./FAQs.css";
import { motion } from "framer-motion";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const faqData = [
  {
    question: "What is Growthzi AI Website Builder?",
    answer:
      "Growthzi's AI Website Builder makes creating websites simple. Choose templates, customize easily, and build a professional site without any technical know-how.",
  },
  {
    question: "How can you grow your business with Growthzi?",
    answer:
      "You can grow your business with Growthzi by leveraging its AI-driven tools and solutions across various aspects of digital marketing. Growthzi helps you streamline processes, reach a wider audience, and optimize your marketing efforts for maximum impact and growth.",
  },
  // {
  //   question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
  //   answer:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  // },
  {
    question: "Is it difficult to start growing?",
    answer:
      "Our user-friendly tools and intuitive interfaces makes it easy for businesses of all sizes to get started and see results quickly. Whether you're new to digital marketing or an experienced professional, Growthzi provides the tools and support you need to start growing your business effectively.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <motion.section
      className="steps"
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
    >
        <div className="faqs">
            <section className="faq-section">
            <h2>FAQ's</h2>
            <div className="faq-list">
                {faqData.map((item, index) => (
                <div
                    key={index}
                    className={`faq-item ${activeIndex === index ? "active" : ""}`}
                >
                    <div className="faq-question">
                    <p>{item.question}</p>
                    <button
                        className="faq-toggle-btn"
                        onClick={() => toggleFAQ(index)}
                    >
                        {activeIndex === index ? (
                        <IoIosArrowDown />
                        ) : (
                        <IoIosArrowForward />
                        )}
                    </button>
                    </div>
                    {activeIndex === index && (
                    <div className="faq-answer">
                        <p>{item.answer}</p>
                    </div>
                    )}
                </div>
                ))}
            </div>
            </section>
        </div>
    </motion.section>
  );
};

export default FAQs;
