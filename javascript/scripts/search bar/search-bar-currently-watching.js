import seasons from '../../data/data.js';
import addFilterer from './search-bar.js';

const currentlyWatchingArray = seasons.filter(season => Object.hasOwn(localStorage, season.title));
addFilterer(currentlyWatchingArray);