import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { createCountryMarkup } from './js/createCountryMarkup';
import { refs } from './js/refs';
import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;

const renderListOfCountries = countries => {
  const markup = createCountryMarkup(countries);
  refs.listOfCountries.innerHTML = markup;
};

const onInputSearch = e => {
  const strinOfSearch = e.target.value.trim();
  if (!strinOfSearch) {
    renderListOfCountries([]);
    return;
  }
  fetchCountries(strinOfSearch)
    .then(renderListOfCountries)
    .catch(error => console.log(error));
};

refs.searchInput.addEventListener(
  'input',
  debounce(onInputSearch, DEBOUNCE_DELAY)
);
