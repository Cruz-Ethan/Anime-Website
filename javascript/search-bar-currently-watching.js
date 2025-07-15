const currentlyWatchingArray = seasons.filter(season => Object.hasOwn(localStorage, season.title));

searchBarElement.addEventListener('keyup', () => {
    const searchString = searchBarElement.value.toLowerCase();
    renderAnimeGrid(currentlyWatchingArray.filter(season => season.alternativeTitles.toLowerCase().includes(searchString)));
});