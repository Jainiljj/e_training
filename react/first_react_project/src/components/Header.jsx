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
    <div>
      <h2>My App</h2>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About</Link>
      </nav>
      <br />
      <div>
        {user ? (
          <div>
            <span>Hi, {user.name}</span>
            <button onClick={handleLogout} style={{ marginLeft: '10px' }}>Logout</button>
          </div>
        ) : (
          <div>
            <Link to="/login">Login</Link> |{' '}
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
