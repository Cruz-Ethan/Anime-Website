import getAnime from "./anime-finder.js";
import { currentEpisode, setEpisode } from "./episodes.js";

let openingStartTime, openingEndTime, endingStartTime, endingEndTime;
const skipIntroButtonElement = document.querySelector('.skip-intro-button');
const skipOutroButtonElement = document.querySelector('.skip-outro-button');
const videoElement = document.querySelector('.episode');
const anime = getAnime();

export function updateSkipTimes() {
    videoElement.removeEventListener('timeupdate', displayIntroButton);
    videoElement.removeEventListener('timeupdate', displayOutroButton);
    assignNewTimes(currentEpisode);
    videoElement.addEventListener('timeupdate', displayIntroButton);
    videoElement.addEventListener('timeupdate', displayOutroButton);
};

export function addSkipFunctionality(numberOfEpisodes) {
    skipIntroButtonElement.addEventListener('click', skipIntro);
    skipOutroButtonElement.addEventListener('click', skipOutro);

    videoElement.addEventListener('ended', () => {
        const episodeName = document.title;
        if(currentEpisode < numberOfEpisodes) {
            setEpisode(currentEpisode + 1);
            videoElement.currentTime = 0;
        }
        localStorage.setItem(episodeName, 0);
    });
};

function assignNewTimes(currentEpisode) {
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