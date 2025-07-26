import seasons from '../data/data.js';

export const url = new URL(window.location.href);

// finds current anime object in seasons
export function getAnime() {
    const animeId = url.searchParams.get('animeId');
    return seasons.find(season => season.id === animeId);
};

export default getAnime;