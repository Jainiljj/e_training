import React from 'react';
import Link from 'react roouter';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <a href="/" className="navbar__logo">MyApp</a>
      </div>
      <ul className="navbar__links">
        <li><a href="C:\Users\jaini\OneDrive\Desktop\code\projects\e_training\react\first_react_project\src\pages\home.jsx">Home</a></li>
        <li><a href="C:\Users\jaini\OneDrive\Desktop\code\projects\e_training\react\first_react_project\src\pages\about.jsx">About</a></li>
        <li><a href="C:\Users\jaini\OneDrive\Desktop\code\projects\e_training\react\first_react_project\src\pages\contact.jsx">Contact</a></li>
      </ul>
      <div className="navbar__actions">
        <button type="button" className="navbar__button">Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;