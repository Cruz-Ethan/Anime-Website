function renderAnimeGrid(seasonsArray) {
    animeGridElement.innerHTML = seasonsArray.reduce((animeGridHTML, season) => 
        animeGridHTML + `
        <a class="anime-container" href="shows/${season.path}/episodes.html">
            <img class="anime-cover" src="shows/${season.path}/title-cover.jpg">
            <h3 class="anime-title">${season.title}</h3>
        </a>
    `, '');
}