import renderAnimeGrid from "./grid-renderer.js";

const animeGridElement = document.querySelector('.anime-grid');
let searchString = localStorage.getItem('search value') || '';
const filterRule = season => season.alternativeTitles.toLowerCase().includes(searchString.toLowerCase());
renderAnimeGrid(filterRule);