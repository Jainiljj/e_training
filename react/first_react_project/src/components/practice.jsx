import React from 'react';

function Practice() {
  return (
    <div style={{
      backgroundColor: '#1C63CC ', 
      color: 'white',
      padding: '30px 20px',
      textAlign: 'center',
      fontWeight: 'bold',
      letterSpacing: '1px'
    }}>
      <h1>Ready to start building?</h1>
      <p>Join hundreds of developers.</p>
      <br></br>
      <br></br>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '15px' }}>
        <button 
          style={{ backgroundColor: 'white', color: 'black' }}
          onClick={() => window.location.href = 'https://www.example.com'}
        >
          Start Coding
        </button>
        <button 
          style={{ backgroundColor: 'white', color: 'black' }}
          onClick={() => window.location.href = 'https://www.example.com'}
        >
          Projects
        </button>
        </div>

    </div>
  );
}

export default Practice;
