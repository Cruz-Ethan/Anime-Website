import seasons from '../../data/data.js';
import {searchBarElement, addFilterer} from './search-bar.js';

addFilterer(seasons);
searchBarElement.value = localStorage.getItem('search value') || '';