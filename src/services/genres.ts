import {removeDuplicates} from 'utils/array';

import {Genre} from 'schemas/api';

import {getBaseData} from 'services/_base';

const featured = ["axe", "forro", "mpb", "rock", "samba-pagode", "sertanejo"];

export const getGenres = async () => {
  const allLives = await getBaseData();

  const rawGenres = allLives.map((item) => item.genres).flat();
  const allGenres = removeDuplicates(rawGenres)
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((genre) => ({
      ...genre,
      featured: featured.includes(genre.id),
    }));

  return allGenres as Genre[];
};
