import { saveEpisodeTime } from "../episode-renderer.js";

const searchBarElement = document.querySelector('.search-bar');

searchBarElement.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        saveEpisodeTime();
        document.location.href = `../../../index.html?searchValue=${searchBarElement.value.toLowerCase()}`;
    }
});