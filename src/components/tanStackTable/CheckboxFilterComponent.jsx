import React from 'react';

const CheckboxFilterComponent = ({ options, selectedOptions, setSelectedOptions }) => {
  const handleChange = (event) => {
    const value = event.target.name;
    setSelectedOptions(prev => ({
      ...prev,
      [value]: !prev[value]
    }));
  };

  return (
    <div>
      {options.map(option => (
        <label key={option}>
          <input
            type="checkbox"
            name={option}
            checked={selectedOptions[option] || false}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default CheckboxFilterComponent;