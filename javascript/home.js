const animeGridElement = document.querySelector('.anime-grid');
let searchString = localStorage.getItem('search value') || '';
filteredSeasonsArray = seasons.filter(season => season.alternativeTitles.toLowerCase().includes(searchString.toLowerCase()));
renderAnimeGrid(filteredSeasonsArray);