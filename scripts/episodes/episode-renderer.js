import getAnime from "./anime-finder.js";
import { addSkipEpisodeFunctionality, addSkipSongFunctionality } from "./skip.js";
import { url } from "./anime-finder.js";

// variable exports
export const anime = getAnime();
export let currentEpisode = Number(url.searchParams.get('currentEpisode')) || Number(localStorage.getItem(anime.id)) || 1;
export const videoElement = document.querySelector('.episode');

// load episodes list
export function renderEpisodeArray() {
    document.querySelector('.episode-list-container').innerHTML = anime.opening.startTimes.reduce((htmlCode, x, index) =>
        htmlCode + `<button class="episode-button">${index + 1}</button>`, '');

    const episodesArray = document.querySelectorAll('.episode-button');
    episodesArray[currentEpisode - 1].classList.toggle('selected-episode');
    episodesArray.forEach((episodeButtonElement, index) => {
        episodeButtonElement.addEventListener('click', () => {
            changeURL(index + 1);
        });
    });
}

// used to change url
export function changeURL(episodeIndex) {
    // save and remove current data
    saveEpisodeTime();
    renderEpisodeArray();

    // update episode
    currentEpisode = episodeIndex;
    url.searchParams.set('currentEpisode', `${currentEpisode}`);
    window.location.search = url.searchParams;
}

// used to set episode
export function setEpisode() {
    // render HTML data
    videoElement.src = `shows/${anime.path}/episodes/episode-${currentEpisode}.mp4`;
    document.title = `${anime.title}: Episode ${currentEpisode}`;
    const episodesArray = document.querySelectorAll('.episode-button');
    episodesArray[currentEpisode - 1].classList.add('selected-episode');

    // load old data, save new data, update skip button appearances
    videoElement.currentTime = Number(localStorage.getItem(anime.id + currentEpisode)) || 0;
    localStorage.setItem(anime.id, currentEpisode);
    addSkipEpisodeFunctionality();
    addSkipSongFunctionality();
}

export function saveEpisodeTime() {
    localStorage.setItem(anime.id + currentEpisode, String(videoElement.currentTime));
}