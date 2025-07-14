const animeGridElement = document.querySelector('.anime-grid');
let filterRule = localStorage.getItem('filter seasons');
let filteredSeasonsArray = seasons;

if(filterRule) {
    switch(filterRule) {
        case 'search bar':
            filteredSeasonsArray = seasons.filter(season => season.alternativeTitles.toLowerCase().includes(localStorage.getItem('search value').toLowerCase()));
            break;
        case 'currently watching':
            filteredSeasonsArray = seasons.filter(season => Object.hasOwn(localStorage, season.title));
            break;
    }
}

renderAnimeGrid(filteredSeasonsArray);

function renderAnimeGrid(seasonsArray) {
    animeGridElement.innerHTML = seasonsArray.reduce((animeGridHTML, season) => 
        animeGridHTML + `
        <a class="anime-container" href="episodes.html">
            <img class="anime-cover" src="${season.path}/title-cover.jpg">
            <h3 class="anime-title">${season.title}</h3>
        </a>
    `, '');

    const animeArray = document.querySelectorAll('.anime-container');
    let index = 0;
    for(let i = 0; i < seasonsArray.length; i++) {
        animeArray[i].addEventListener('click', () => {
            index = seasons.indexOf(seasonsArray[i], index);
            localStorage.setItem('currentlyWatching', index);
            console.log(localStorage.getItem('currentlyWatching'));
        })
    }
}