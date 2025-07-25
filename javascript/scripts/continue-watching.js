import renderAnimeGrid from "./grid-renderer.js";
import { inWatchLater, addToWatchLater, removeFromWatchLater } from "../data/data.js";

const filterRule = season => Object.hasOwn(localStorage, season.id);
renderAnimeGrid(filterRule);