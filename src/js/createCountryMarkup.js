export const createCountryListMarkup = contries => {
  return contries
    .map(country => {
      return `<li><img class="mini-flag" src="${country.flags.svg}" alt="${country.name}" height="20px">${country.name}</li>`;
    })
    .join('');
};

export const createCountryMarkup = contries => {
  return contries.map(country => {
    return `<h2><img class="flag-icon" src="${country.flags.svg}" alt="${country.name}" height="40px">${country.name}</h2> <ul><li><span class="property-name">Capital: </span>${country.capital}</li><li><span class="property-name">Population: </span>${country.population}</li><li><span class="property-name">Languages: </span>${country.languages[0].name}</li></ul>`;
  });
};
