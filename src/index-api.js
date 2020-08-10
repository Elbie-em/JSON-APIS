const container = document.getElementById('container');

const searchBox = document.getElementById('search-val');
const searchBtn = document.getElementById('search-btn');

searchBtn.onclick = () => {
    
    const img = document.createElement('img');
    searchVal = searchBox.value;

    let webUrl = `https://api.giphy.com/v1/gifs/translate?api_key=m4l4htXckYyr6G8S9cbCNCmAczFhyTKx&s=${searchVal}`;

    fetch(webUrl, { mode: 'cors' })
        .then(response => {
            return response.json();
        }).then(response => {
            img.src = response.data.images.original.url;
        })
        .catch(error => {
            console.log(error);
        });
    
    container.appendChild(img)
}
