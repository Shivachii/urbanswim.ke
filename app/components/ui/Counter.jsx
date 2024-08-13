import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Function to handle increment
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Function to handle decrement
  const decrement = () => {
    setCount(prevCount => Math.max(prevCount - 1, 0));
  };

  // Function to handle input change
  const handleInputChange = (event) => {
    const value = event.target.value;
    // Ensure the value is a number and not less than 0
    if (/^\d*$/.test(value)) {
      setCount(Number(value));
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4 border border-gray-300 ">
      <button
        onClick={decrement}
        className="px-4 py-2  rounded-md"
      >
        -
      </button>
      <input
        type="text"
        name="count"
        value={count}
        onChange={handleInputChange}
        className="w-16  text-center  rounded-md outline-none"
      />
      <button
        onClick={increment}
        className="px-4 py-2 rounded-md"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
