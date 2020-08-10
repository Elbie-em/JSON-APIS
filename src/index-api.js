const container = document.getElementById('img-container');

const searchBox = document.getElementById('search-val');
const searchBtn = document.getElementById('search-btn');


const getGif = async (searchVal,img) => {
    let webUrl = `https://api.giphy.com/v1/gifs/translate?api_key=m4l4htXckYyr6G8S9cbCNCmAczFhyTKx&s=${searchVal}`;

    const response = await fetch(webUrl,{mode: 'cors'});
    const gifData = await response.json();
    img.src = gifData.data.images.original.url;

    return img;
}

searchBtn.onclick = () => {
    container.innerHTML = '';
    const img = document.createElement('img');
    searchVal = searchBox.value;

    if (searchVal === '') {
        const error = document.createElement('small');
        error.innerHTML = `We cannot find what you are looking for!!! <br> Please try again`;
        error.className = 'text-danger font-weight-lighter';
        container.appendChild(error);
    } else {
        img.src = getGif(searchVal,img);
        container.appendChild(img);
    }

}
