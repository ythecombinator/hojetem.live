import {NextPage} from 'next';

import Hub from 'components/hub';
import Main from 'components/layout/main';

import {Genre, LivesHub} from 'schemas/api';

import {getGenres} from 'services/genres';
import {getLivesHub} from 'services/lives';

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
  const livesHub = await getLivesHub();
  const genresList = await getGenres();

  return { props: { livesHub, genresList } };
}

export default Home;
