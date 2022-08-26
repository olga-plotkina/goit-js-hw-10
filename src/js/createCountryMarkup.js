export const createCountryMarkup = contries => {
  return contries
    .map(country => {
      return `<li><img src="${country.flags.svg}" alt="${country.name}" height="20px">${country.name}</li>`;
    })
    .join('');
};
