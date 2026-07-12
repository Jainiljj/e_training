import React from 'react';
import DevCarousel from '../components/DevCarousel';

function Home() {
  return (
    <div style={{ maxWidth: '1000px', margin: '20px auto 60px', width: '100%' }}>
      
      <DevCarousel />

      <div className="features-section">
        <div className="features-header">
          <h2>Key Platform Features</h2>
          <p>Our cutting-edge environment is optimized for development speed, security, and responsive UI design.</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Super Fast Build</h3>
            <p>Optimized compilation pipeline built on top of Vite for rapid updates.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Secure Routing</h3>
            <p>State-of-the-art client validation and routing safeguards.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Modern Interface</h3>
            <p>Stunning interactive UI built with high-quality Bootstrap components.</p>
          </div>
        </div>
      </div>

      <div className="playground-card" style={{ marginTop: '60px' }}>
        <div className="playground-content">
          <span className="badge">Interactive Tools</span>
          <h2>React State & Optimization Playground</h2>
          <p>
            Learn and practice advanced React hooks including useMemo, 
            useReducer, useCallback, and useContext with our live feedback
            editor.
          </p>
        </div>
        <div className="playground-action">
          <button className="btn-primary" onClick={() => {}}>
            Go to Playground &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
