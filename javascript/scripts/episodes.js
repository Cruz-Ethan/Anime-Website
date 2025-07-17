import seasons from '../data/data.js';

const url = document.location.href;
let endingIndex = url.length;
endingIndex = url.lastIndexOf('/', endingIndex - 1);
let startingIndex = url.lastIndexOf('/', endingIndex - 1);
startingIndex = url.lastIndexOf('/', startingIndex - 1) + 1;
const animePath = url.substring(startingIndex, endingIndex).replaceAll('%20', ' ');

let anime = seasons.find(season => season.path === animePath);

const episodeListContainerElement = document.querySelector('.episode-list-container');
episodeListContainerElement.innerHTML = anime.opening.startTimes.reduce((htmlCode, x, index) => {
    return htmlCode + `<button class="episode-button">${index + 1}</button>`;
}, '');

let currentEpisode = Number(localStorage.getItem(anime.title)) || 1;

document.title = `${anime.title}: Episode ${currentEpisode}`;
const episodesArray = document.querySelectorAll('.episode-button');
const videoElement = document.querySelector('.episode');
episodesArray[currentEpisode - 1].classList.toggle('selected-episode');
videoElement.src = `episodes/episode-${currentEpisode}.mp4`;

episodesArray.forEach((episodeButtonElement, index) => {
    episodeButtonElement.addEventListener('click', () => {
        setEpisode(index + 1);
    });
});

let openingStartTime, openingEndTime, endingStartTime, endingEndTime;
assignNewTimes();
const skipIntroButtonElement = document.querySelector('.skip-intro-button');
const skipOutroButtonElement = document.querySelector('.skip-outro-button');
videoElement.addEventListener('timeupdate', displayIntroButton);
videoElement.addEventListener('timeupdate', displayOutroButton);
videoElement.addEventListener('ended', () => {
    if(currentEpisode < episodesArray.length) {
        setEpisode(currentEpisode + 1);
    }
});
skipIntroButtonElement.addEventListener('click', skipIntro);
skipOutroButtonElement.addEventListener('click', skipOutro);

function setEpisode(episodeIndex) {
    episodesArray[currentEpisode - 1].classList.remove('selected-episode');
    localStorage.setItem(document.title, String(videoElement.currentTime));
    videoElement.removeEventListener('timeupdate', displayIntroButton);
    videoElement.removeEventListener('timeupdate', displayOutroButton);

    currentEpisode = episodeIndex;
    videoElement.src = `episodes/episode-${episodeIndex}.mp4`;
    document.title = `${anime.title}: Episode ${currentEpisode}`;

    episodesArray[currentEpisode - 1].classList.add('selected-episode');
    videoElement.currentTime = Number(localStorage.getItem(document.title)) || 0;
    localStorage.setItem(anime.title, currentEpisode);
    assignNewTimes();
    videoElement.addEventListener('timeupdate', displayIntroButton);
    videoElement.addEventListener('timeupdate', displayOutroButton);
}

const titleElement = document.querySelector('.title');
titleElement.innerHTML = anime.title;

const alternativeTitlesElement = document.querySelector('.alternative-titles');
alternativeTitlesElement.innerHTML = anime.alternativeTitles;

const descriptionElements = document.querySelectorAll('.description');
descriptionElements.forEach((descriptionElement) => {
    descriptionElement.innerHTML = anime.description;
});

function assignNewTimes() {
    openingStartTime = anime.opening.startTimes[currentEpisode - 1];
    openingEndTime = openingStartTime + anime.opening.lengthSeconds;

    endingStartTime = anime.ending.startTimes[currentEpisode - 1];
    endingEndTime = endingStartTime + anime.ending.lengthSeconds;
}

function displayIntroButton() {
    let currentTime = videoElement.currentTime;
    if(currentTime > openingStartTime && currentTime < openingEndTime - 1) {
        skipIntroButtonElement.classList.add('display-button');
    }
    else {
        skipIntroButtonElement.classList.remove('display-button');
    }
}

function displayOutroButton() {
    let currentTime = videoElement.currentTime;
    if(currentTime > endingStartTime && currentTime < endingEndTime - 1) {
        skipOutroButtonElement.classList.add('display-button');
    }
    else {
        skipOutroButtonElement.classList.remove('display-button');
    }
}

function skipIntro() {
    videoElement.currentTime = openingEndTime;
}

function skipOutro() {
    videoElement.currentTime = endingEndTime;
}