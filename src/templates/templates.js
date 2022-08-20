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

export {renderSingleCountry, renderCountryList}