import React, { useState, useEffect } from 'react';

// Debounce function to limit the rate at which a function can fire.
const debounce = (func, delay) => {
  let timer;
  return function(...args) {
    clearTimeout(timer); // Clear the current timer every time the function is called
    timer = setTimeout(() => { // Set a new timer
      func.apply(this, args); // Call the function after the delay
    }, delay);
  };
};

// GlobalFilter component for a debounced search input field
const GlobalFilter = ({ filter, setFilter }) => {
  const [inputValue, setInputValue] = useState(filter); 

  // Debounced version of setFilter, timer can be set (default = 500ms)
  const debounceSetFilter = debounce(value => {
    setFilter(value); 
  }, 500);

  useEffect(() => {
    debounceSetFilter(inputValue); // Apply the debounced filter update

    // Clean-up function to delete the timer when the component is logged off
    return () => {
      clearTimeout(debounceSetFilter);
    };
  }, [inputValue]); // Effect dependency array includes inputValue

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)} 
      placeholder="Search for..." // Fallback Placeholder for the input
    />
  );
};

export default GlobalFilter;
