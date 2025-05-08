import React from "react";
import "./Steps.css";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const imageVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Steps = () => {
  return (
    <section className="steps">
      <div className="website-builder">
        <div className="container">
          <h1 className="main-heading">
            Create your website in <span className="purple-text">3 Steps</span>
          </h1>

          <div className="card-grid">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="row"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {index % 2 === 0 ? (
                  <>
                    <motion.div className="card" variants={textVariants}>
                      <div className="card-dot"></div>
                      <h2 className="card-title">
                        {index === 0
                          ? "Single Text Input"
                          : "Fully Customisable"}
                      </h2>
                      <p className="card-text">
                        Lorem ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </motion.div>
                    <motion.div className="image-container" variants={imageVariants}>
                      <img
                        src={assets.Overlay_and_Shadow}
                        alt="Illustration"
                      />
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.div className="image-container ai-image-container" variants={imageVariants}>
                      <img src={assets.AI} alt="AI illustration" />
                    </motion.div>
                    <motion.div className="card" variants={textVariants}>
                      <div className="card-dot"></div>
                      <h2 className="card-title">AI Powered Development</h2>
                      <p className="card-text">
                        Lorem ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </motion.div>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="button-container"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <button className="generate-button">✨<span /> Generate</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
