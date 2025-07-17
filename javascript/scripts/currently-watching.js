import renderAnimeGrid from "./grid-renderer.js";

const animeGridElement = document.querySelector('.anime-grid');
const filterRule = season => Object.hasOwn(localStorage, season.title);
renderAnimeGrid(filterRule);