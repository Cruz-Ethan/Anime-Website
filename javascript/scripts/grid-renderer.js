import seasons from '../data/data.js'

export function renderAnimeGrid(filterRule, seasonsArray = seasons) {
    const filteredSeasonsArray = seasonsArray.filter(filterRule);
    const animeGridElement = document.querySelector('.anime-grid');
    animeGridElement.innerHTML = filteredSeasonsArray.reduce((animeGridHTML, season) => 
        animeGridHTML + `
        <a class="anime-container" href="shows/${season.path}/episodes.html">
            <img class="anime-cover" src="shows/${season.path}/title-cover.jpg">
            <h3 class="anime-title">${season.title}</h3>
        </a>
    `, '');
}

export default renderAnimeGrid;