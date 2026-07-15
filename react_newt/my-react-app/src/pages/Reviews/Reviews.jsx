import React from "react";
import './Reviews.css';
const Reviews = () => {
  return (
    <div className="reviews">
      <h1>Reviews</h1>
      <p>Here are some of my reviews:</p>
      <div className="reviews-cards">
        <div className="card">
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="image1" />
          <h3>Review 1</h3>
          <p>Professional website design services</p>
        </div>
        <div className="card">
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="image2" />
          <h3>Review 2</h3>
          <p>Professional website development services</p>
        </div>
        <div className="card">
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="image3" />
          <h3>Review 3</h3>
          <p>Professional UI/UX design services</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
