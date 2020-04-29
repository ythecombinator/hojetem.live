import {removeDuplicates} from 'utils/array';
import {getRandomInt} from 'utils/number';

import {Genre, GenreMapping, Live, LivesHub} from 'schemas/api';

import {getBaseData} from 'services/_base';

// Utils

const mapLives = (allLives: Live[], allGenres: Genre[]) => {
  // Featured Lives
  const randomFeatured1 = getRandomInt(0, allLives.length / 2);
  const randomFeatured2 = getRandomInt(allLives.length / 2, allLives.length);

  const featured1 = allLives[randomFeatured1];
  const featured2 = allLives[randomFeatured2];

  const featured = [featured1, featured2];

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
