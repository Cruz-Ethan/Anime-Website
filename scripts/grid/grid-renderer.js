import { inWatchLater, seasons } from '../data/data.js';

function shortenDescription(description) {
    return description.length > 75 ? description.substring(0, 75) + '...' : description;
}

export function renderAnimeGrid(filterRule, seasonsArray = seasons) {
    const filteredSeasonsArray = seasonsArray.filter(filterRule);
    const animeGridElement = document.querySelector('.anime-grid');
    animeGridElement.innerHTML = filteredSeasonsArray.reduce((animeGridHTML, season) => 
        animeGridHTML + `
        <div class="anime-container anime-container-${season.id}">
            <a href="episodes.html?animeId=${season.id}&currentEpisode=${Number(localStorage.getItem(season.id)) || 1}">
                <img class="anime-cover" src="shows/${season.path}/title-cover.jpg">
                <h3 class="anime-title">${season.title}</h3>                
            </a>
            <div class="tooltip-container">
                <h3>${season.title}</h3>
                <p>${shortenDescription(season.description)}</p>
                <button class="watch-now-button" data-anime-id="${season.id}">Watch Now!</button>
                <button class="watch-later-button" data-anime-id="${season.id}">${inWatchLater(season.id) ? 'Remove From ' : ''}Watch Later</button>
            </div>
        </div>
    `, '');
}

export default renderAnimeGrid;