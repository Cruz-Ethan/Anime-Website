import seasons from '../data/data.js';

export function getAnime() {
    // the path of each anime folder is stored in the seasons array
    const url = document.location.href;

    // get the important part of the path
    let endingIndex = url.length;
    endingIndex = url.lastIndexOf('/', endingIndex - 1);
    let startingIndex = url.lastIndexOf('/', endingIndex - 1);
    startingIndex = url.lastIndexOf('/', startingIndex - 1) + 1;
    const animePath = url.substring(startingIndex, endingIndex).replaceAll('%20', ' ');

    // return the first anime that matches the path
    return seasons.find(season => season.path === animePath);
};

export default getAnime;