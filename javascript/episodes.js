let animeID = localStorage.getItem('currentlyWatching');
const anime = seasons[animeID];

document.title = anime.title;

const episodeListContainerElement = document.querySelector('.episode-list-container');
for(let index = 1; index <= anime.numberOfEpisodes; index++) {
    episodeListContainerElement.innerHTML += `<button class="episode-button">${index}</button>`
}

let currentEpisode = Number(localStorage.getItem(document.title)) || 1;
const episodesArray = document.querySelectorAll('.episode-button');
const videoElement = document.querySelector('.episode');

episodesArray[currentEpisode - 1].classList.toggle('selected-episode');
videoElement.src = `${anime.path}/episodes/episode-${currentEpisode}.mp4`;

episodesArray.forEach((episodeButtonElement, index) => {
    episodeButtonElement.addEventListener('click', () => {
        setEpisode(index + 1);
    });
});

function setEpisode(episodeIndex) {
    videoElement.src = `${anime.path}/episodes/episode-${episodeIndex}.mp4`;
    episodesArray[currentEpisode - 1].classList.toggle('selected-episode');
    currentEpisode = episodeIndex;
    episodesArray[currentEpisode - 1].classList.toggle('selected-episode');
    localStorage.setItem(document.title, currentEpisode);
}

const titleCoverElement = document.querySelector('.title-cover');
titleCoverElement.src = `${anime.path}/title-cover.jpg`;

const titleElement = document.querySelector('.title');
titleElement.innerHTML = anime.title;

const alternativeTitlesElement = document.querySelector('.alternative-titles');
alternativeTitlesElement.innerHTML = anime.alternativeTitles;

const descriptionElements = document.querySelectorAll('.description');
descriptionElements.forEach((descriptionElement) => {
    descriptionElement.innerHTML = anime.description;
});