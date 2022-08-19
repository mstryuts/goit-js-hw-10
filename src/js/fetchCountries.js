const apiLink = 'https://restcountries.com/v3.1/name/'
const apiResponse = 'fields=name,capital,population,flags,languages'

export function fetchCountries(name){
   return fetch(`${apiLink}${name}?${apiResponse}`)
   .then(res => res.json())
   .catch(error => console.log(error))
}
