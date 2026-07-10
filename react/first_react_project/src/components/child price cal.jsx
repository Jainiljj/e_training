import React, { useMemo } from 'react';

function Child({ number, price = [] }) {
  // useMemo caches the result of the calculation between re-renders.
  // The function inside will ONLY run when the dependency 'number' changes.
  const squaredNumber = useMemo(() => {
    console.log('Calculating square... (Re-calculating)');
    return number * number;
  }, [number]);

  // useMemo logic to add all elements in the price array
  // The function inside will ONLY run when the 'price' array changes.
  const totalPrice = useMemo(() => {
    console.log('Calculating total price... (Re-calculating)');
    return price.reduce((total, current) => total + current, 0);
  }, [price]);

  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h2>useMemo Demonstration (Child)</h2>
      <p><strong>Number to Square:</strong> {number}</p>
      <p><strong>Squared Result:</strong> {squaredNumber}</p>

      <hr style={{ margin: '15px 0' }} />

      <h3>Price Calculation</h3>
      <p><strong>Prices List:</strong> {price.join(', ')}</p>
      <p><strong>Total Price:</strong> {totalPrice}</p>
    </div>
  );
}

export default React.memo(Child);
