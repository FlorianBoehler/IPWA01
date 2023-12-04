import React from "react";

const CheckboxFilterComponent = ({
  buttonTitle,
  options,
  selectedOptions,
  setSelectedOptions,
}) => {
  const handleChange = (event) => {
    const value = event.target.name;
    setSelectedOptions((prev) => ({
      ...prev,
      [value]: !prev[value],
    }));
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {buttonTitle}
      </button>
      <ul className="dropdown-menu">
        {options.map((option) => (
          <li key={option}>
            <label className="dropdown-item">
              <input
                type="checkbox"
                name={option}
                checked={selectedOptions[option] || false}
                onChange={handleChange}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckboxFilterComponent;
