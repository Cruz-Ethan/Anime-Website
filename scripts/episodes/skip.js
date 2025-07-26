import { currentEpisode, changeURL, anime, videoElement } from "./episode-renderer.js";

let openingStartTime, openingEndTime, endingStartTime, endingEndTime;
const skipIntroButtonElement = document.querySelector('.skip-intro-button');
const skipOutroButtonElement = document.querySelector('.skip-outro-button');

// adds functionality to skip intro and skip outro buttons
export function addSkipSongFunctionality() {
    assignSkipTimes(currentEpisode);
    videoElement.addEventListener('timeupdate', displayIntroButton);
    videoElement.addEventListener('timeupdate', displayOutroButton);
    skipIntroButtonElement.addEventListener('click', skipIntro);
    skipOutroButtonElement.addEventListener('click', skipOutro);
};

// plays next episode (if exists) when current episode ends
export function addSkipEpisodeFunctionality() {
    videoElement.addEventListener('ended', () => {
        videoElement.currentTime = 0;
        if(currentEpisode < anime.opening.startTimes.length) {
            localStorage.setItem(anime.id + (currentEpisode + 1), 0);
            changeURL(currentEpisode + 1);
        }
    });
};

// get skip times
function assignSkipTimes(currentEpisode) {
    openingStartTime = anime.opening.startTimes[currentEpisode - 1];
    openingEndTime = openingStartTime + anime.opening.lengthSeconds;

    endingStartTime = anime.ending.startTimes[currentEpisode - 1];
    endingEndTime = endingStartTime + anime.ending.lengthSeconds;
}

// display and hide buttons when necessary
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