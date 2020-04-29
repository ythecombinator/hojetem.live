import {FunctionComponent} from 'react';

import Router from 'next/router';

import LiveCoverImage from 'components/live/cover/image';
import LiveCoverText from 'components/live/cover/text';

import {Live} from 'schemas/api';

import {useStyles} from './styles';

interface Props {
  color?: string;
  logo?: string;
  shouldLinkTitle?: boolean;
  title?: string;
  live: Live;
  handlePlay?: (liveId: number) => () => void;
}

const LiveCover: FunctionComponent<Props> = (props) => {
  const {
    color,
    logo,
    shouldLinkTitle = true,
    live,
    title,
    handlePlay,
  } = props;

  const classes = useStyles({});

  return (
    <header className={classes.header}>
      <LiveCoverImage live={live} />
      <LiveCoverText
        live={live}
        logo={logo}
        title={title}
        color={color}
        shouldLinkTitle={shouldLinkTitle}
        handlePlay={handlePlay!}
      />
    </header>
  );
};

LiveCover.defaultProps = {
  handlePlay: (liveId: number) => () => {
    Router.push(`/live/[liveid]`, `/live/${liveId}`);
  },
};

export default LiveCover;
