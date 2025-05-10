import React, { useEffect, useState } from "react";
import "./GenerateWebsite.css";
import { assets } from '../../../assets/global/assets';

const quotes = [
  "Patience is the companion of wisdom.",
  "Your website will bloom in a few seconds.",
];

const GenerateWebsite = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const currentQuote = quotes[quoteIndex];
    let typingSpeed = isDeleting ? 30 : 70;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentQuote.length) {
        setDisplayedText(currentQuote.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentQuote.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), 1200);
        } else {
          setIsDeleting(false);
          setQuoteIndex((prev) => (prev + 1) % quotes.length);
          setCharIndex(0);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, quoteIndex]);

  useEffect(() => {
    const stages = [10, 30, 50, 70, 90, 100];
    let i = 0;
    const interval = setInterval(() => {
      setProgress(stages[i]);
      i++;
      if (i === stages.length) clearInterval(interval);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="generate-container">
      <img src={assets.Logo} alt="Logo" className="generate-logo" />
      <p className="quote-text">{displayedText}</p>
      <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }}>
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default GenerateWebsite;
