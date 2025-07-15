const animeGridElement = document.querySelector('.anime-grid');
filteredSeasonsArray = seasons.filter(season => Object.hasOwn(localStorage, season.title));
renderAnimeGrid(filteredSeasonsArray);