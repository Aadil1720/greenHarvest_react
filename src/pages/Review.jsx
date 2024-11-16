import React, { useState } from 'react';
import './Review.css'
// Sample data for reviews
const reviews = [
  {
    id: 1,
    imgSrc: 'images/pic-1.png',
    text: "I love shopping on Green Harvest! They have a great selection of products, fast shipping, and an easy-to-use website. I'm a happy customer!",
    name: 'John Deo',
    rating: 4.5,
  },
  {
    id: 2,
    imgSrc: 'images/pic-2.png',
    text: "I loved shopping on Green Harvest - their website was so easy to use! I found exactly what I needed and the quality was top-notch. I'll definitely be back for all my gardening needs!",
    name: 'Liza Vren',
    rating: 4.5,
  },
  {
    id: 3,
    imgSrc: 'images/pic-3.png',
    text: "Green Harvest's website is my go-to for all things gardening! Their prices are competitive, and the website is easy to use. I've had great experiences with their customer service team too - top notch!",
    name: 'Daniel Fard',
    rating: 4.5,
  },
];

// Helper function to render stars based on rating
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={i} className="fa fa-star"></i>);
  }
  if (halfStar) {
    stars.push(<i key="half" className="fa fa-star-half"></i>);
  }

  return stars;
};

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the next review
  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  // Navigate to the previous review
  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="review" id="review">
      <h1 className="heading">
        Customer's <span>Review</span>
      </h1>

      <div className="review-slider">
        <div className="box">
          <img
            src={reviews[currentIndex].imgSrc}
            alt={reviews[currentIndex].name}
          />
          <p>{reviews[currentIndex].text}</p>
          <h3>{reviews[currentIndex].name}</h3>
          <div className="stars">{renderStars(reviews[currentIndex].rating)}</div>
        </div>

        {/* Navigation Buttons */}
        <div className="navigation">
          <button onClick={prevReview} className="prev-btn">
            <i className="fa fa-arrow-left"></i>
          </button>
          <button onClick={nextReview} className="next-btn">
            <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>

      {/* Dots for Navigation */}
      <div className="dots">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Review;
