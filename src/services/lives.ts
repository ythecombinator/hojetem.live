import {chunk, removeDuplicates} from 'utils/array';
import {getRandomInt} from 'utils/number';

import {Genre, GenreMapping, Live, LivesHub} from 'schemas/api';

import {getBaseData} from 'services/_base';

// Utils

const mapLives = (allLives: Live[], allGenres: Genre[]) => {
  // Featured Lives
  const validLives = allLives.filter((live) => live.active);
  const livesChunks = chunk(validLives, 10);

  const randomFeatured1 = getRandomInt(0, livesChunks[0].length);
  const randomFeatured2 = getRandomInt(0, livesChunks[1].length);
  const randomFeatured3 = getRandomInt(0, livesChunks[2].length);

  const featured1 = validLives[randomFeatured1];
  const featured2 = validLives[randomFeatured2];
  const featured3 = validLives[randomFeatured3];

  const featured = [featured1, featured2, featured3];

  // Lives per genre
  const genres = allGenres.map((genre) => genre.id);

  const genresMapping = {} as GenreMapping;

  genres.forEach((id) => {
    genresMapping[id] = allLives.filter((item) => {
      const hasItem = !!item.genres.find((genre) => genre.id === id);
      return hasItem;
    });
  });

  // Final response
  const livesHub = {
    featured,
    genres: genresMapping,
  };

  return livesHub as LivesHub;
};

// Exported

export const getLivesHub = async () => {
  const allLives = await getBaseData();

  const rawGenres = allLives.map((item) => item.genres).flat();
  const allGenres = removeDuplicates(rawGenres);

  const lives = mapLives(allLives, allGenres);

  return lives;
};

export const getLive = async (liveId: string) => {
  const id = Number(liveId);

  const allLives = await getBaseData();

  const live = allLives.find((item) => item.id === id);

  return live;
};
