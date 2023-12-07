import React from "react";

// CheckboxFilterComponent for rendering a dropdown with checkbox options
const CheckboxFilterComponent = ({
  buttonTitle, // Title of the dropdown button
  options, // List of options to display in the dropdown
  selectedOptions, // Object holding the current state of selected options
  setSelectedOptions, // Function to update the selected options state
}) => {
  // Handler for checkbox change events
  const handleChange = (event) => {
    const value = event.target.name;
    setSelectedOptions((prev) => ({
      ...prev,
      [value]: !prev[value], // Toggle the state of the clicked checkbox option
    }));
  };

  // Sort options alphabetically
  const sortedOptions = options.sort((a, b) => a.localeCompare(b));

  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {/* Display the button title*/}
        {buttonTitle}
      </button>
      <ul className="dropdown-menu">
        {sortedOptions.map((option) => (
          <li key={option}>
            <label className="dropdown-item">
              <input
                type="checkbox"
                name={option}
                checked={selectedOptions[option] || false}
                onChange={handleChange}
              />
              {/* Display the option name */}
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckboxFilterComponent;
