import React from "react";

// DebouncedInput: An input component that delays the invocation of the onChange handler
function DebouncedInput({
  value: initialValue, // The initial value of the input
  onChange,            // Handler to be called after the debounce delay
  debounce = 500,      // Time in milliseconds to wait before invoking onChange
  ...props             // Spread other props to pass to the input element
}) {
  const [value, setValue] = React.useState(initialValue);

  // Update local state when initialValue changes
  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  // Debounce effect for the onChange handler
  React.useEffect(() => {
    // Set a timeout to delay the onChange invocation
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    // Clear the timeout on unmount or when value, onChange, or debounce changes
    return () => clearTimeout(timeout);
  }, [value, onChange, debounce]);

  return (
    <input
      {...props} // Spread any additional props onto the input
      value={value} // Controlled input value
      onChange={(e) => e.target && setValue(e.target.value)} // Update local state on change
    />
  );
}

export default DebouncedInput;