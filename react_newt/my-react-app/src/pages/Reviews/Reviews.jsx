import React from "react";
import './Reviews.css';
const Reviews = () => {
  return (
    <div className="reviews" id="reviews">
      <h1>Reviews</h1>
      <p>Here are some of my reviews:</p>
      <div className="reviews-cards">
        <div className="card">
          <h3>John Doe</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <p>Professional website design services</p>
        </div>
        <div className="card">
          <h3>Jane Smith</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <p>Professional website development services</p>
        </div>
        <div className="card">
          <h3>Mike Johnson</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <p>Professional UI/UX design services</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
