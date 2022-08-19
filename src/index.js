import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;
const input = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');



input.addEventListener('input',debounce(onInput, DEBOUNCE_DELAY));


function onInput(){
   const name = input.value.trim();
   fetchCountries(name).then(data =>{
    data.map((data)=>{
      console.log(data)
    })
  }).catch(error => console.log(error))
}

// fetchCountries('').then(data =>{
//   data.map((data)=>{
//     console.log(data)
//   })
// })

// fetchCountries('ukraine').then(data => console.log(data))