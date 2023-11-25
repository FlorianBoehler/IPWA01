import React, { useState, useEffect } from 'react';

const debounce = (func, delay) => {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

const GlobalFilter = ({ filter, setFilter }) => {
  const [inputValue, setInputValue] = useState(filter);

  // Debounce Funktion, die setFilter aufruft
  const debounceSetFilter = debounce(value => {
    setFilter(value);
  }, 500);

  useEffect(() => {
    debounceSetFilter(inputValue);
    // Diese Funktion wird aufgerufen, wenn die Komponente unmount wird.
    return () => {
      clearTimeout(debounceSetFilter);
    };
  }, [inputValue]);

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search for..."
    />
  );
};

export default GlobalFilter;
