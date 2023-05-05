//console.log('Cargado');

const URL = 'https://api.thecatapi.com/v1/images/search';

const getRandomCat = async function () {
     let result = await fetch(URL);
     console.debug(result)
     let data = await result.json();
     const img = document.querySelector('img');
     img.src = data[0].url;
} 

getRandomCat();

const button = document.querySelector('button');

button.addEventListener('click', getRandomCat);