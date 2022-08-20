const baseUrl = 'https://restcountries.com/v3.1/name/'
const setUrl = 'fields=name,capital,population,flags,languages'
import Notiflix from 'notiflix';

export function fetchCountries(name){
   return fetch(`${baseUrl}${name}?${setUrl}`)
      .then(res => {
      if (!res.ok) {
         throw new Error(res.status)
      }
         return res.json();
   }).catch(error => Notiflix.Notify.failure('Oops, there is no country with that name'))
}
