searchBarElement.addEventListener('keyup', () => {
    const searchString = searchBarElement.value.toLowerCase();
    renderAnimeGrid(seasons.filter(season => season.alternativeTitles.toLowerCase().includes(searchString)));
});