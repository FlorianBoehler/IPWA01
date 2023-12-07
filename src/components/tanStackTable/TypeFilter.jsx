export const filterByType = (data, typeFilter) => {
  // Check whether all filters are deactivated
  const isAnyFilterActive = Object.values(typeFilter).some(value => value);

  if (!isAnyFilterActive) {
    return data; // No filter selected, display all data
  }

  return data.filter(item => typeFilter[item.type]);
};