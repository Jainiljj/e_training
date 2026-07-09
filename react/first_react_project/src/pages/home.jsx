import React from 'react';
import { Link } from 'react-router-dom';
import ChildComponent from '../components/ChildComponent';

function Home() {
  return (
    <div>
      <h1>Welcome to MyApp</h1>
      <p>This is the home page. It is very basic.</p>
      
      <ul>
        <li>Feature 1: Basic</li>
        <li>Feature 2: Simple</li>
      </ul>

      {/* Rendering the newly created ChildComponent to demonstrate useMemo */}
      <ChildComponent />

      <Link to="/signup">
        <button style={{ marginTop: '20px' }}>Get Started</button>
      </Link>
    </div>
  );
}

export default Home;
