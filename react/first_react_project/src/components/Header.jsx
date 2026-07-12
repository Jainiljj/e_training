import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const userData = localStorage.getItem('user');
  const user = userData ? JSON.parse(userData) : null;

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header className="app-header">
      <div className="header-brand">
        <Link to="/">My App</Link>
      </div>
      
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/student_form">Student Form</Link>
      </nav>

      <div className="header-actions">
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ fontWeight: 500, color: 'white' }}>Hi, {user.name}</span>
            <button className="btn-white" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link to="/login" className="login-link">Login</Link>
            <Link to="/signup" className="btn-white">Sign Up</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
