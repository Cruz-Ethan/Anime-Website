import {updateSkipTimes, addSkipFunctionality} from './skip.js';
import { currentEpisode, anime, setEpisode, saveEpisodeTime } from './episode-renderer.js';

// render HTML data
document.querySelector('.title-cover').src = `shows/${anime.path}/title-cover.jpg`;
document.title = `${anime.title}: Episode ${currentEpisode}`;
document.querySelector('.title').innerHTML = anime.title;
document.querySelector('.alternative-titles').innerHTML = anime.alternativeTitles;
document.querySelectorAll('.description').forEach(descriptionElement => descriptionElement.innerHTML = anime.description);
document.querySelector('.episode-list-container').innerHTML = anime.opening.startTimes.reduce((htmlCode, x, index) => {
    return htmlCode + `<button class="episode-button">${index + 1}</button>`;
}, '');

// load episodes list
export const episodesArray = document.querySelectorAll('.episode-button');
episodesArray[currentEpisode - 1].classList.toggle('selected-episode');
episodesArray.forEach((episodeButtonElement, index) => {
    episodeButtonElement.addEventListener('click', () => {
        setEpisode(index + 1);
    });
});

// load video
export const videoElement = document.querySelector('.episode');
videoElement.src = `shows/${anime.path}/episodes/episode-${currentEpisode}.mp4`;
videoElement.currentTime = Number(localStorage.getItem(anime.id + currentEpisode)) || 0;
updateSkipTimes(currentEpisode);
addSkipFunctionality(episodesArray.length);

// header stuff
document.querySelector('.logo').addEventListener('click', saveEpisodeTime);
document.querySelector('.home-link').addEventListener('click', saveEpisodeTime);
document.querySelector('.continue-watching-link').addEventListener('click', saveEpisodeTime);