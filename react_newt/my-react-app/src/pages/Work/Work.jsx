import React from "react";
import './Work.css';
import image from "../../assets/hero.png"

const Work = () => {
  return (

    <div className="work" id="work">
      <h1>Work</h1>
      <p>Here are some of my latest projects:</p>
      <div className="work-cards">
        <div className="card">
          <img src={image} alt="image1" />
          <h3>S.A.I.</h3>
          <p>AI powered Business Solutions</p>
        </div>
        <div className="card">
          <img src={image} alt="image2" />
          <h3>Project 2</h3>
          <p>Description of project 2</p>
        </div>
        <div className="card">
          <img src={image} alt="image3" />
          <h3>Project 3</h3>
          <p>Description of project 3</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
