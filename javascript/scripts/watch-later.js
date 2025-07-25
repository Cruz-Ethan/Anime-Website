import {removeFromWatchLater, inWatchLater} from "../data/data.js";
import renderAnimeGrid from "./grid-renderer.js";

renderAnimeGrid(season => inWatchLater(season.id));

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.watch-now-button').forEach(button => {
        button.addEventListener('click', () => {
            const animeId = button.dataset.animeId;
            window.location.href = `episodes.html?animeId=${animeId}&currentEpisode=${Number(animeId) || 1}`;
        });
    });
    
    document.querySelectorAll('.watch-later-button').forEach(button => {
        button.addEventListener('click', () => {
            const animeId = button.dataset.animeId;
            document.querySelector(`.anime-container-${animeId}`).remove();
            removeFromWatchLater(animeId);
        });
    });
});