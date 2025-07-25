import seasons from '../../data/data.js';
import {searchBarElement, addFilterer} from './search-bar.js';
import { url } from '../anime-finder.js';

searchBarElement.value = url.searchParams.get('searchValue') || '';
addFilterer(seasons);