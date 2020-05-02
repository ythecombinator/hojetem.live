import {FunctionComponent} from 'react';

import Router from 'next/router';

import LiveCoverImage from 'components/live/cover/image';
import LiveCoverText from 'components/live/cover/text';

import {Live} from 'schemas/api';

import {useStyles} from './styles';

interface Props {
  title?: string;
  live: Live;
  handlePlay?: (liveId: string) => () => void;
}

const LiveCover: FunctionComponent<Props> = (props) => {
  const { live, title, handlePlay } = props;

  const classes = useStyles({});

  return (
    <header className={classes.header}>
      <LiveCoverImage live={live} />
      <LiveCoverText live={live} title={title} handlePlay={handlePlay!} />
    </header>
  );
};

LiveCover.defaultProps = {
  handlePlay: (liveId: string) => () => {
    Router.push(`/[liveid]`, `/${liveId}`);
  },
};

export default LiveCover;
