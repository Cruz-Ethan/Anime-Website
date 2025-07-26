import seasons from "../data/data.js";
import addSearchBarFunctionality from "../header/search-bar.js";
import addLightModeFunctionality from "./light-mode.js";
import addHeaderFunctionality from "../header/header.js";

const continueWatchingArray = seasons.filter(season => Object.hasOwn(localStorage, season.id));
addSearchBarFunctionality(continueWatchingArray);   // render grid and search bar functionality
addLightModeFunctionality();                        // render light mode (if on)
addHeaderFunctionality();                           // header functions