export const extractUniqueOptions = (data, key) => {
    const uniqueValues = new Set(data.map(item => item[key]));
    return Array.from(uniqueValues);
  };