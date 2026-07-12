import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    
    const usersData = localStorage.getItem('users');
    if (usersData) {
      const users = JSON.parse(usersData);
      const user = users.find(u => u.email === email && u.password === password);
      
      if (user) {
        localStorage.setItem('user', JSON.stringify({ name: user.name, email: user.email }));
        navigate('/');
        window.location.reload(); 
      } else {
        setError('Invalid email or password');
      }
    } else {
      setError('No accounts found. Please sign up.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body p-5">
              <h2 className="text-center mb-4 fw-bold">Login</h2>
              
              {error && <div className="alert alert-danger">{error}</div>}
              
              <form onSubmit={handleLogin}>
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
                    placeholder="Enter your password"
                  />
                </div>
                
                <button type="submit" className="btn btn-primary btn-lg w-100">
                  Login
                </button>
              </form>
              
              <div className="text-center mt-4">
                <p className="text-muted">Don't have an account? <Link to="/signup" className="text-decoration-none fw-bold">Sign up here</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
