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
    <div style={{ border: '2px solid #007bff', padding: '20px', margin: '20px 0', borderRadius: '8px', backgroundColor: '#f8f9fa' }}>
      <h2>useMemo Demonstration</h2>
      
      <p><strong>Counter (forces re-render):</strong> {counter}</p>
      <p><strong>Number to Square:</strong> {number}</p>
      <p><strong>Squared Result:</strong> {squaredNumber}</p>

      <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
        <button 
          onClick={() => setCounter(counter + 1)}
          style={{ padding: '8px 16px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Increment
        </button>
        <button 
          onClick={() => setNumber(counter)}
          style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Calculate
        </button>
      </div>
      
      <p style={{ fontSize: '0.9em', color: '#555', marginTop: '15px' }}>
      </p>
    </div>
  );
}

export default ChildComponent;
