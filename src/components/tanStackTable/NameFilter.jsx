export const filterByName = (data, nameFilter) => {
  // Check whether all filters are deactivated
    const isAnyFilterActive = Object.values(nameFilter).some(value => value);
  
    if (!isAnyFilterActive) {
      return data; // No filter selected, display all data
    }
  
    return data.filter(item => nameFilter[item.name]); 
  };