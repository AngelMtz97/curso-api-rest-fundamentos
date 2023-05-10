//console.log('Cargado');

const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=3&page=2';

const getRandomCat = async function () {
     let result = await fetch(API_URL);
     console.debug(result)
     let data = await result.json();
     console.log(data);

     const img1 = document.getElementById('img1');
     const img2 = document.getElementById('img2');
     const img3 = document.getElementById('img3');

     img1.src  = data[0].url;
     img2.src  = data[1].url;
     img3.src  = data[2].url;
     //const img = document.querySelector('img');
     //img.src = data[0].url;
} 

getRandomCat();

const button = document.querySelector('button');

button.addEventListener('click', getRandomCat);