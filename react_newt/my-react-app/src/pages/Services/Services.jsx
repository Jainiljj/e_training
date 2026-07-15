import React from "react";
import Cards from "../../components/Cards/Cards";
import image from "../../assets/hero.png"
import './Services.css';
const Services = () => {
  return (
    <div className="services" id="services">
      <h1>Services</h1>
      <p>Here are some of my services:</p>
      <div className="services-cards">
        <div className="card">
          <img src={image} alt="image1" />
          <h3>Web Design</h3>
          <p>Professional website design services</p>
        </div>
        <div className="card">
          <img src={image} alt="image2" />
          <h3>Web Development</h3>
          <p>Professional website development services</p>
        </div>
        <div className="card">
          <img src={image} alt="image3" />
          <h3>UI/UX Design</h3>
          <p>Professional UI/UX design services</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
