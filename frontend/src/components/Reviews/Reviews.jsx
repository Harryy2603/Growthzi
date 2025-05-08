import React, { useState } from "react";
import "./Reviews.css";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { assets } from "../../assets/assets";

const reviews = [
  {
    name: "Emma knowles",
    role: "Customer",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus perspiciatis obcaecati corrupti mollitia, quisquam iste velit sunt quia laboriosam odit laborum, ex quam deleniti!",
    image: assets.female,
  },
  {
    name: "Emma knowles",
    role: "Customer",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus perspiciatis obcaecati corrupti mollitia, quisquam iste velit sunt quia laboriosam odit laborum, ex quam deleniti!",
    image: assets.male,
  },
  {
    name: "Emma knowles",
    role: "Customer",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus perspiciatis obcaecati corrupti mollitia, quisquam iste velit sunt quia laboriosam odit laborum, ex quam deleniti!",
    image: assets.female,
  },
  {
    name: "Emma knowles",
    role: "Customer",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus perspiciatis obcaecati corrupti mollitia, quisquam iste velit sunt quia laboriosam odit laborum, ex quam deleniti!",
    image: assets.male,
  },
  {
    name: "Emma knowles",
    role: "Customer",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus perspiciatis obcaecati corrupti mollitia, quisquam iste velit sunt quia laboriosam odit laborum, ex quam deleniti!",
    image: assets.female,
  },
  {
    name: "Emma knowles",
    role: "Customer",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus perspiciatis obcaecati corrupti mollitia, quisquam iste velit sunt quia laboriosam odit laborum, ex quam deleniti!",
    image: assets.male,
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < reviews.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const visibleReviews = reviews.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className="review">
      <div className="reviews-section">
        <h2>
          Customer's <span>Review</span>
        </h2>
        <div className="carousel-controls">
          <button onClick={handlePrev} className="nav-btn">
            <IoIosArrowBack />
          </button>
          <div className="reviews-container">
            {visibleReviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color="#FFD700" />
                  ))}
                </div>
                <p className="review-text">{review.text}</p>
                <div className="review-footer">
                  <div className="user-info">
                    <img src={review.image} alt="user" />
                    <div>
                      <h4>{review.name}</h4>
                      <p>{review.role}</p>
                    </div>
                  </div>
                  <img
                    src={assets.google_icon}
                    alt="Google"
                    className="google-icon"
                  />
                </div>
              </div>
            ))}
          </div>
          <button onClick={handleNext} className="nav-btn">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
