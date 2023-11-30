export const filterByType = (data, typeFilter) => {
  // Prüfen, ob alle Filter deaktiviert sind
  const isAnyFilterActive = Object.values(typeFilter).some(value => value);

  if (!isAnyFilterActive) {
    return data; // Kein Filter ausgewählt, alle Daten anzeigen
  }

  return data.filter(item => typeFilter[item.type]);
};