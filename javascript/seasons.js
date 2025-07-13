const animeGridElement = document.querySelector('.anime-grid');
console.log(animeGridElement);

animeGridElement.innerHTML = seasons.reduce((animeGridHTML, season) => 
    animeGridHTML + `
    <a class="anime-container" href="episodes.html">
        <img class="anime-cover" src="${season.path}/title-cover.jpg">
        <h3 class="anime-title">${season.title}</h3>
    </a>
`, '');

const animeArray = document.querySelectorAll('.anime-container');
animeArray.forEach((containerElement, index) => {
    containerElement.addEventListener('click', () => {
        localStorage.setItem('currentlyWatching', index);
        console.log(localStorage.getItem('currentlyWatching'));
    })
});