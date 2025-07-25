import seasons from '../data/data.js';

export const url = new URL(window.location.href);

export function getAnime() {
    const animeId = url.searchParams.get('animeId');
    return seasons.find(season => season.id === animeId);
};

export default getAnime;