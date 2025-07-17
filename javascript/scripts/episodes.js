import {updateSkipTimes, addSkipFunctionality} from './skip.js';
import getAnime from './anime-finder.js';

// load the anime data
const anime = getAnime();

// render HTML data
export let currentEpisode = Number(localStorage.getItem(anime.title)) || 1;
document.title = `${anime.title}: Episode ${currentEpisode}`;
document.querySelector('.title').innerHTML = anime.title;
document.querySelector('.alternative-titles').innerHTML = anime.alternativeTitles;
document.querySelectorAll('.description').forEach(descriptionElement => descriptionElement.innerHTML = anime.description);
document.querySelector('.episode-list-container').innerHTML = anime.opening.startTimes.reduce((htmlCode, x, index) => {
    return htmlCode + `<button class="episode-button">${index + 1}</button>`;
}, '');

// load episodes list
const episodesArray = document.querySelectorAll('.episode-button');
episodesArray[currentEpisode - 1].classList.toggle('selected-episode');
episodesArray.forEach((episodeButtonElement, index) => {
    episodeButtonElement.addEventListener('click', () => {
        setEpisode(index + 1);
    });
});

// load video
const videoElement = document.querySelector('.episode');
videoElement.src = `episodes/episode-${currentEpisode}.mp4`;

// add skip buttons and autoplay to next episode
updateSkipTimes();
addSkipFunctionality(episodesArray.length);

// used to change episodes
export function setEpisode(episodeIndex) {
    // remove and save current data
    episodesArray[currentEpisode - 1].classList.remove('selected-episode');
    localStorage.setItem(document.title, String(videoElement.currentTime));

    // update current episode
    currentEpisode = episodeIndex;

    // render HTML data
    videoElement.src = `episodes/episode-${episodeIndex}.mp4`;
    document.title = `${anime.title}: Episode ${currentEpisode}`;
    episodesArray[currentEpisode - 1].classList.add('selected-episode');

    // load old data, save new data, update skip button appearances
    videoElement.currentTime = Number(localStorage.getItem(document.title)) || 0;
    localStorage.setItem(anime.title, currentEpisode);
    updateSkipTimes(currentEpisode);
}