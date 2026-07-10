import React, { useRef, useEffect } from 'react';
function InputComponent() {
  // Create a ref to store the input element
  const inputRef = useRef(null);
  useEffect(() => {
    // Focus the input element when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // Empty dependency array ensures this runs only once on mount
  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h2>useRef Demonstration</h2>
      <label htmlFor="autoFocusInput" style={{ marginRight: '10px' }}>
        Auto-focusing Input:
      </label>
      <input 
        id="autoFocusInput"
        type="text" 
        ref={inputRef} 
        placeholder="I focus on mount!" 
        style={{ padding: '5px' }}
      />
    </div>
  );
}
export default InputComponent;