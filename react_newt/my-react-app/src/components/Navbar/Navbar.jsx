import React from 'react';
import './Navbar.css';


const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="name">
          <a href="#home">Jainil Singhvi</a>
        </div>
        <div className="links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#reviews">Reviews</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
        <div className='Hire'>
          <a href="#contact"><button className='hirebtn'>Hire me</button></a>
        </div>
      </div>

    </>
  );
};

export default Navbar;
