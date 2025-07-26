import renderAnimeGrid from "../grid/grid-renderer.js";
import addTooltipFunctionality from "../grid/tooltip.js";
import { url } from '../episodes/anime-finder.js';

export const searchBarElement = document.querySelector('.search-bar');

// filters when typing in search bar
export function addSearchBarFunctionality(seasonsArray) {
    searchBarElement.value = url.searchParams.get('searchValue') || '';
    updateGrid(seasonsArray);
    searchBarElement.addEventListener('keyup', () => {
        updateGrid(seasonsArray);
    });
};

export function updateGrid(seasonsArray) {
    const searchString = searchBarElement.value.toLowerCase();
    renderAnimeGrid(season => season.alternativeTitles.toLowerCase().includes(searchString), seasonsArray);
    addTooltipFunctionality(seasonsArray);
}

export default addSearchBarFunctionality;