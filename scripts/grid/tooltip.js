import { addToWatchLater, removeFromWatchLater, inWatchLater } from "../data/data.js";
import { updateGrid } from "../header/search-bar.js";

export function addTooltipFunctionality(seasonsArray) {
    document.querySelectorAll('.watch-now-button').forEach(button => {
        button.addEventListener('click', () => {
            const animeId = button.dataset.animeId;
            window.location.href = `episodes.html?animeId=${animeId}&currentEpisode=${Number(localStorage.getItem(animeId)) || 1}`;
        });
    });

    document.querySelectorAll('.watch-later-button').forEach(button => {
        button.addEventListener('click', () => {
            const animeId = button.dataset.animeId;
            if(inWatchLater(animeId)) {
                removeFromWatchLater(animeId);
            } else {
                addToWatchLater(animeId);
            }
            updateGrid(seasonsArray);
        });
    });
}

export default addTooltipFunctionality;