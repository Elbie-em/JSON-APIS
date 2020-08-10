const container = document.getElementById('img-container');

const searchBox = document.getElementById('search-val');
const searchBtn = document.getElementById('search-btn');

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


}
