import seasons from '../../data/data.js';
import addFilterer from './search-bar.js';

const continueWatchingArray = seasons.filter(season => Object.hasOwn(localStorage, season.id));
addFilterer(continueWatchingArray);