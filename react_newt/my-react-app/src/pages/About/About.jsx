import React from 'react';
import './About.css';
import image from '../../assets/hero.png';

const About = () => {
  return (
    <div className="about" id="about">


      <div className="right">
        <h1>
          Web Developer
        </h1>
        <img src={image} alt="" />
      </div>

      <div className="left">
        <div className="subtitle">
          ABOUT ME
        </div>
        <div className="title"><h1>
          A bit about who I am</h1>
        </div>
        <div className="description">
          <p>I'm Jainil, a freelance designer and frontend developer based in Paris with 5 years of experience shipping digital products for startups, agencies, and scale-ups across Europe. I thrive at the intersection of great design and clean code.</p>
          <p>I believe great interfaces are invisible — they get out of the user's way. My work is fast, accessible and built to last. When I'm not coding, you'll find me hiking or hunting for a good espresso.</p>
          <br />
          <h3 className="text-white" style={{ margin: 0 }}>Stack & tools</h3>
        </div>

        <div className="buttons">
          <button className="btnsss">Tailwind CSS</button>
          <button className="btnsss">Alpine.js</button>
          <button className="btnsss">Figma</button>
          <button className="btnsss">HTML / CSS</button>
          <button className="btnsss">JavaScript</button>
          <button className="btnsss">Symfony</button>
          <button className="btnsss">Framer</button>
          <button className="btnsss">Webflow</button>
        </div>
        <hr className="hr" />
      </div>

    </div>
  );
};

export default About;
