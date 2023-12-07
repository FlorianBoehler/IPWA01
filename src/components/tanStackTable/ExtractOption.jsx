// Function to extract unique options from table data array
export const extractUniqueOptions = (data, key) => {
  // Create a Set to hold the unique values.

  const uniqueValues = new Set(data.map((item) => item[key]));

  // Convert the Set back to an array

  return Array.from(uniqueValues);
};
