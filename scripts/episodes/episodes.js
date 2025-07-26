import { anime, saveEpisodeTime, renderEpisodeArray, setEpisode } from './episode-renderer.js';
import addHeaderFunctionality from '../header/header.js';
import addLightModeFunctionality from '../display/light-mode.js';
import { searchBarElement } from '../header/search-bar.js';

// render HTML data
document.querySelector('.title-cover').src = `shows/${anime.path}/title-cover.jpg`;
document.querySelector('.title').innerHTML = anime.title;
document.querySelector('.alternative-titles').innerHTML = anime.alternativeTitles;
document.querySelectorAll('.description').forEach(descriptionElement => descriptionElement.innerHTML = anime.description);

// save times when click header
document.querySelector('.logo').addEventListener('click', saveEpisodeTime);
document.querySelector('.home-link').addEventListener('click', saveEpisodeTime);
document.querySelector('.continue-watching-link').addEventListener('click', saveEpisodeTime);
document.querySelector('.watch-later-link').addEventListener('click', saveEpisodeTime);

// header functionality
addHeaderFunctionality();
addLightModeFunctionality();

// search bar functionality
searchBarElement.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        saveEpisodeTime();
        document.location.href = `index.html?searchValue=${searchBarElement.value.toLowerCase()}`;
    }
});

// episodes
renderEpisodeArray();
setEpisode();