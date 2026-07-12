import React from 'react';

function Practice() {
  return (
    <div className="practice-section">
      <div className="practice-content">
        <h1>Ready to Start Building?</h1>
        <p>Join hundreds of developers who use our platform to create stunning web applications.</p>
        
        <div className="practice-buttons">
          <button 
            className="btn-white"
            onClick={() => window.location.href = 'https://www.example.com'}
          >
            Start Coding
          </button>
          <button 
            className="btn-outline-white"
            onClick={() => window.location.href = 'https://www.example.com'}
          >
            View Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default Practice;
