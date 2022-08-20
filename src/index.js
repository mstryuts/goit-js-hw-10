import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import { fetchCountries } from './js/fetchCountries';
import { renderSingleCountry, renderCountryList } from './templates/templates';

const DEBOUNCE_DELAY = 300;
const input = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');


function onInput() {
  const name = input.value.trim();

  if (name === '') {
    Notiflix.Notify.warning('Please, enter country name')
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
    return
  }

  fetchCountries(name)
    .then(country => {

      countryList.innerHTML = '';
      countryInfo.innerHTML = '';

      if (country.length === 1) {
        countryInfo.innerHTML = renderSingleCountry(country)
        return
      }
       if (country.length > 1 && country.length <= 10) {
        countryList.innerHTML = renderCountryList(country)
        return
      }
      if (country.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        return
      }
    })
}

input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));