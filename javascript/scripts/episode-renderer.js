import getAnime from "./anime-finder.js";
import { episodesArray, videoElement } from "./episodes.js";
import { updateSkipTimes } from "./skip.js";
import { url } from "./anime-finder.js";

export const anime = getAnime();

export let currentEpisode = Number(url.searchParams.get('currentEpisode')) || Number(localStorage.getItem(anime.id)) || 1;

// used to change episodes
export function setEpisode(episodeIndex) {
    // remove and save current data
    episodesArray[currentEpisode - 1].classList.remove('selected-episode');
    saveEpisodeTime();

    // update current episode
    currentEpisode = episodeIndex;

    // render HTML data
    videoElement.src = `shows/${anime.path}/episodes/episode-${currentEpisode}.mp4`;
    document.title = `${anime.title}: Episode ${currentEpisode}`;
    episodesArray[currentEpisode - 1].classList.add('selected-episode');

    // load old data, save new data, update skip button appearances
    videoElement.currentTime = Number(localStorage.getItem(anime.id + currentEpisode)) || 0;
    localStorage.setItem(anime.id, currentEpisode);
    updateSkipTimes(currentEpisode);

    // edit url
    url.searchParams.set('currentEpisode', `${currentEpisode}`);
    window.location.search = url.searchParams;
}

export function saveEpisodeTime() {
    localStorage.setItem(anime.id + currentEpisode, String(videoElement.currentTime));
}