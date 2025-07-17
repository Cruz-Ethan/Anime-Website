import renderAnimeGrid from "../grid-renderer.js";

const searchBarElement = document.querySelector('.search-bar');

export function addFilterer(seasonsArray) {
    searchBarElement.addEventListener('keyup', () => {
        const searchString = searchBarElement.value.toLowerCase();
        renderAnimeGrid(season => season.alternativeTitles.toLowerCase().includes(searchString), seasonsArray);
    });
};

export default addFilterer;