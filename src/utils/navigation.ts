import {useRouter} from 'next/router';

import {useSmoothScroll} from 'utils/dom';

import {routes} from 'config/constants';

export const useNavigation = () => {
  const { scrollTo } = useSmoothScroll();
  const { push, pathname } = useRouter();

  const isHome = pathname === routes.home;

  let navigateToGenre: (genreId: string) => void;

  if (isHome) {
    navigateToGenre = (genreId: string) => scrollTo(genreId);
  } else {
    navigateToGenre = (genreId: string) => push(`/#${genreId}`, `/#${genreId}`);
  }

  return { navigateToGenre };
};
