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
}

const LiveCover = (props: Props) => {
  const { color, logo, shouldLinkTitle = true, live, title } = props;

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
      />
    </header>
  );
};

export default LiveCover;
