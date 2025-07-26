import seasons from "../data/data.js";
import addSearchBarFunctionality from "../header/search-bar.js";
import addLightModeFunctionality from "./light-mode.js";
import addHeaderFunctionality from "../header/header.js";

addSearchBarFunctionality(seasons); // render grid and search bar functionality
addLightModeFunctionality();        // render light mode (if on)
addHeaderFunctionality();           // header functions