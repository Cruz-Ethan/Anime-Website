const url = document.location.href;
let endingIndex = url.length;
endingIndex = url.lastIndexOf('/', endingIndex - 1);
let startingIndex = url.lastIndexOf('/', endingIndex - 1);
startingIndex = url.lastIndexOf('/', startingIndex - 1) + 1;
const animePath = url.substring(startingIndex, endingIndex).replaceAll('%20', ' ');

let anime;
seasons.forEach((season) => {
    if(season.path === animePath) {
        anime = season;
    }
})

document.title = anime.title;

const episodeListContainerElement = document.querySelector('.episode-list-container');
for(let index = 1; index <= anime.numberOfEpisodes; index++) {
    episodeListContainerElement.innerHTML += `<button class="episode-button">${index}</button>`
}

let currentEpisode = Number(localStorage.getItem(document.title)) || 1;
const episodesArray = document.querySelectorAll('.episode-button');
const videoElement = document.querySelector('.episode');

episodesArray[currentEpisode - 1].classList.toggle('selected-episode');
videoElement.src = `episodes/episode-${currentEpisode}.mp4`;

episodesArray.forEach((episodeButtonElement, index) => {
    episodeButtonElement.addEventListener('click', () => {
        setEpisode(index + 1);
    });
});

function setEpisode(episodeIndex) {
    videoElement.src = `episodes/episode-${episodeIndex}.mp4`;
    episodesArray[currentEpisode - 1].classList.toggle('selected-episode');
    currentEpisode = episodeIndex;
    episodesArray[currentEpisode - 1].classList.toggle('selected-episode');
    localStorage.setItem(document.title, currentEpisode);
}

const titleElement = document.querySelector('.title');
titleElement.innerHTML = anime.title;

const alternativeTitlesElement = document.querySelector('.alternative-titles');
alternativeTitlesElement.innerHTML = anime.alternativeTitles;

const descriptionElements = document.querySelectorAll('.description');
descriptionElements.forEach((descriptionElement) => {
    descriptionElement.innerHTML = anime.description;
});