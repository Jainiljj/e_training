import React, { useState, useMemo } from 'react';

function ChildComponent() {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(1);

  // useMemo caches the result of the calculation between re-renders.
  // The function inside will ONLY run when the dependency 'number' changes.
  const squaredNumber = useMemo(() => {
    console.log('Calculating square... (Re-calculating)');
    return number * number;
  }, [number]);

  return (
    <div>
      <h2>useMemo Demonstration</h2>
      
      <p><strong>Counter (forces re-render):</strong> {counter}</p>
      <p><strong>Number to Square:</strong> {number}</p>
      <p><strong>Squared Result:</strong> {squaredNumber}</p>

      <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
        <button 
          onClick={() => setCounter(counter + 1)}
        >
          Increment
        </button>
        <button 
          onClick={() => setNumber(counter)}
        >
          Calculate
        </button>
          <button 
          onClick={() => setNumber(counter +1)}
        >
          price calulator
        </button>
      </div>
      
      <p style={{ fontSize: '0.9em', color: '#555', marginTop: '15px' }}>
      </p>
    </div>
  );
}

export default ChildComponent;
