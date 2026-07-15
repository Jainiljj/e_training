import React from 'react';
import './Home.css';
import image from '../../assets/hero.png';

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="left">
        <div className="subtitle">
          AVAILABLE FOR WORK
        </div>
        <div className="title"><h1>
          Hi, I'm Jainil</h1>
        </div>
        <div className="description">
          Freelance <span className="text-white">UI/UX Designer & Frontend Developer</span>.<br /> I design and build digital products
          that people love to use — fast, clean, and accessible.
        </div>

        <div className="buttons">
          <button className="btnsss">View my work</button>
          <button className="btnsss">Get in touch</button>
        </div>
        <hr className="hr" />
        <div className="infor">
          <div className="infor-item">
            <h3>34+</h3>
            <p>Projects done</p>
          </div>
          <div className="infor-item">
            <h3>21+</h3>
            <p>Happy clients</p>
          </div>
          <div className="infor-item">
            <h3>5y</h3>
            <p>Experience</p>
          </div>
        </div>
      </div>

      <div className="right">
        <h1>
          Web Develover
        </h1>
        <img src={image} alt="" />
      </div>

    </div>
  );
};

export default Home;
