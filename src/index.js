const header = document.querySelector('header');
const section = document.querySelector('section');

// Request URL from github
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

let request = new XMLHttpRequest();

request.open('GET',requestURL);

//setting the responseType to JSON, so that XHR knows that the server will be returning JSON, and that this should be converted behind the scenes into a JavaScript object
request.responseType = 'json';

//send the request with the send() method
request.send();

request.onload = () => {
    const superheroes = request.response;
    populateHeader(superheroes);
}

const populateHeader = (jsonObject) => {
    const elemH1 = document.createElement('h1');
    elemH1.textContent = jsonObject['squadName'];

    const elemPg = document.createElement('p');
    elemPg.textContent = `Hometown: ${jsonObject['homeTown']} // Formed: ${jsonObject['formed']}`;
}