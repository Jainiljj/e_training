import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setError('');

    const usersData = localStorage.getItem('users');
    const users = usersData ? JSON.parse(usersData) : [];

    if (users.some(u => u.email === email)) {
      setError('An account with this email already exists.');
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    localStorage.setItem('user', JSON.stringify({ name: newUser.name, email: newUser.email }));
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body p-5">
              <h2 className="text-center mb-4 fw-bold">Sign Up</h2>
              
              {error && <div className="alert alert-danger">{error}</div>}
              
              <form onSubmit={handleSignup}>
                <div className="mb-3">
                  <label className="form-label text-muted fw-semibold">Name</label>
                  <input 
                    type="text" 
                    className="form-control form-control-lg"
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="mb-3">
                  <label className="form-label text-muted fw-semibold">Email address</label>
                  <input 
                    type="email" 
                    className="form-control form-control-lg"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    placeholder="name@example.com"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="form-label text-muted fw-semibold">Password</label>
                  <input 
                    type="password" 
                    className="form-control form-control-lg"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                    placeholder="Create a password"
                  />
                </div>
                
                <button type="submit" className="btn btn-primary btn-lg w-100">
                  Sign Up
                </button>
              </form>
              
              <div className="text-center mt-4">
                <p className="text-muted">Already have an account? <Link to="/login" className="text-decoration-none fw-bold">Login here</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
