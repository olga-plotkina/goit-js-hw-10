import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { createCountryListMarkup } from './js/createCountryMarkup';
import { createCountryMarkup } from './js/createCountryMarkup';
import { refs } from './js/refs';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 300;

const renderListOfCountries = countries => {
  if (countries.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  }
  if (countries.length === 1) {
    refs.listOfCountries.innerHTML = '';
    const markup = createCountryMarkup(countries);
    refs.countryCard.innerHTML = markup;
  } else {
    refs.countryCard.innerHTML = '';
    const markupOfList = createCountryListMarkup(countries);
    refs.listOfCountries.innerHTML = markupOfList;
  }
};

const onInputSearch = e => {
  const strinOfSearch = e.target.value.trim();
  if (!strinOfSearch) {
    renderListOfCountries([]);
    return;
  }
  fetchCountries(strinOfSearch).then(renderListOfCountries);
};

refs.searchInput.addEventListener(
  'input',
  debounce(onInputSearch, DEBOUNCE_DELAY)
);
