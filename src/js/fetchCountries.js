const apiLink = 'https://restcountries.com/v3.1/name/'
const apiResponse = 'fields=name,capital,population,flags,languages'

export function fetchCountries(name){
   return fetch(`${apiLink}${name}?${apiResponse}`)
      .then(res => {
      if (!res.ok) {
         throw new Error(res.status)
      }
         return res.json();
   })
}
