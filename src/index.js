import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const input = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');


function onInput() {
  const name = input.value.trim();

  if (name === '') {
    return (countryList.innerHTML = ''), (countryInfo.innerHTML = '');
  }

  fetchCountries(name)
    .then(country => {

      countryList.innerHTML = '';
      countryInfo.innerHTML = '';

      if (country.length === 1) {
        renderSingleCountry(country)
        return
      }
      if (country.length >= 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        return
      }
      renderCountryList(country)
      
    })
    .catch(error => Notiflix.Notify.failure('Oops, there is no country with that name'))
}

function renderSingleCountry(data) {
  countryInfo.innerHTML = data.map(({ name, flags, capital, population, languages }) => {
    return `<h1><img class="country-info__item--flag" src="${flags.png}" alt="${name.official}">${
      name.official
    }</h1>
      <p class="country-info__item--categories">Capital: ${capital}</p>
      <p class="country-info__item--categories">Population: ${population}</p>
      <p class="country-info__item--categories">Languages: ${Object.values(languages)}</p>`;

  })
}


function renderCountryList(data) {
  countryList.innerHTML = data
    .map(({name,flags}) => {
      return `<li class="country-list__item">
              <img class="country-list__item--flag" src="${flags.svg}" alt="Flag of ${name.official}">
              <h2 class="country-list__item--name">${name.official}</h2>
          </li>`;
    })
    .join("");
}

input.addEventListener('input',debounce(onInput, DEBOUNCE_DELAY));