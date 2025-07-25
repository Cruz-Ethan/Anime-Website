import renderAnimeGrid from "../grid-renderer.js";

export const searchBarElement = document.querySelector('.search-bar');
export function addFilterer(seasonsArray) {
    updateGrid(seasonsArray);
    searchBarElement.addEventListener('keyup', () => {
        updateGrid(seasonsArray);
    });
};

function updateGrid(seasonsArray) {
    const searchString = searchBarElement.value.toLowerCase();
    renderAnimeGrid(season => season.alternativeTitles.toLowerCase().includes(searchString), seasonsArray);
}

export default addFilterer;