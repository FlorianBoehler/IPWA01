export const filterByName = (data, nameFilter) => {
    const isAnyFilterActive = Object.values(nameFilter).some(value => value);
  
    if (!isAnyFilterActive) {
      return data; // Kein Filter ausgewählt, alle Daten anzeigen
    }
  
    return data.filter(item => nameFilter[item.name]); // Annahme: 'item.name' ist der relevante Schlüssel
  };