import {useState} from 'react';

import fetch from 'isomorphic-unfetch';
import {NextPage, NextPageContext} from 'next';

import Main from 'components/layout/main';
import LiveCover from 'components/live/cover';
import LiveInfo from 'components/live/info';
import LiveVideo from 'components/live/video';

import {Live} from 'schemas/api';

import {endpoints} from 'config/constants';

interface Props {
  live: Live;
}

const LivePage: NextPage<Props> = (props) => {
  const { live } = props;

  const [playing, setPlaying] = useState(false);

  const play = () => () => {
    setPlaying(true);
  };

  return (
    <Main title={live.title} description={live.title} image={live.banner}>
      {!playing ? (
        <LiveCover live={live} handlePlay={play} />
      ) : (
        <LiveVideo videoid={live.youtubeVideo} />
      )}
      {playing && (
        <main style={{ position: "relative" }}>
          <LiveInfo live={live} />
        </main>
      )}
    </Main>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const id = context.query.id as string;
  const { base, live } = endpoints;

  const liveResponse = await fetch(`${base}/${live}?id=${id}`);
  const liveData = await liveResponse.json();

  return {
    props: { live: liveData },
  };
}

export default LivePage;
