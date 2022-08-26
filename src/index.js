import './css/styles.css';
const DEBOUNCE_DELAY = 300;
const listRef = document.querySelector('.country-list');

const createCountryMarkup = contries => {
  return contries
    .map(country => {
      return `<li><img src="${country.flags.svg}" alt="${country.name.common}" height="20px">${country.name.common}</li>`;
    })
    .join('');
};
const r = fetch('https://restcountries.com/v3.1/name/sw')
  .then(response => response.json())
  .then(countries => {
    const markup = createCountryMarkup(countries);
    listRef.innerHTML = markup;
  })
  .catch(error => console.log(error));

console.log(r);
