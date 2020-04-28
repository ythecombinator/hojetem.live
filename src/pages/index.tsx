import Link from 'next/link';

import {getGenres} from 'services/genres';
import {getLivesHub} from 'services/lives';

import Layout from '../components/Layout';

const IndexPage = (props: any) => {
  console.log(props);
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export async function getServerSideProps() {
  const livesHub = await getLivesHub();
  const genresList = await getGenres();

  return { props: { livesHub, genresList } };
}

export default IndexPage;
