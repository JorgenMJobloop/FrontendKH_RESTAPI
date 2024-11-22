// fetch data from our API

// endpoints
const endpoints = [];
const movieText = document.getElementById("movie-info");
const tvshowText = document.getElementById("tvshow-info");

// async methods

async function GetMovies(url) {
    const response = await fetch(url);
    let data = await response.json();
    return data;
}

async function GetTVShows(url) {
    const response = await fetch(url);
    let data = await response.json();
    return data;
}



GetMovies("http://localhost:5000/api/movies").then(data => {
    console.log(data);
    data.map((value, index) => {
        let title = document.createElement("p");
        title.textContent = value.title;
        movieText.appendChild(title);
        let table = document.createElement("table");
    })
});


GetTVShows("http://localhost:5000/api/tvshows").then(data => {
    console.log(data);
})
