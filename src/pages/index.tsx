import fetch from 'isomorphic-unfetch';
import {NextPage} from 'next';

import Hub from 'components/hub';
import Main from 'components/layout/main';

import {Genre, LivesHub} from 'schemas/api';

import {endpoints} from 'config/constants';

interface Props {
  livesHub: LivesHub;
  genresList: Genre[];
}

const Home: NextPage<Props> = (props) => {
  const { livesHub, genresList } = props;

  return (
    <Main>
      <Hub livesHub={livesHub} genresList={genresList} />
    </Main>
  );
};

export async function getServerSideProps() {
  const { base, hub, genres } = endpoints;

  // Lives Hub
  const livesHubResponse = await fetch(`${base}/${hub}`);
  const livesHubData = await livesHubResponse.json();

  // Genres
  const genresListResponse = await fetch(`${base}/${genres}`);
  const genresListData = await genresListResponse.json();

  return { props: { livesHub: livesHubData, genresList: genresListData } };
}

export default Home;
