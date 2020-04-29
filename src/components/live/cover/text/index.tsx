import {Box, Button, Link, Typography} from '@material-ui/core';
import {PlayArrowSharp as PlayIcon} from '@material-ui/icons';

import LinkPrefetch from 'components/link-prefetch';

import {formatDate} from 'utils/date';

import {Live} from 'schemas/api';

import {messages} from 'config/constants';

import {useStyles} from './styles';

interface Props {
  color?: string;
  logo?: string;
  shouldLinkTitle?: boolean;
  title?: string;
  live: Live;
  handlePlay: (liveId: number) => () => void;
}

const LiveCoverText = (props: Props) => {
  const {
    color,
    logo,
    shouldLinkTitle = true,
    live,
    title,
    handlePlay,
  } = props;

  const classes = useStyles({});

  const date = formatDate(live.datetime);

  return (
    <div className={classes.text}>
      {title && (
        <Box display="flex" alignItems="center" marginBottom={2}>
          {logo && <img src={logo} className={classes.hubLogo} />}
          <Typography variant="h4" className={classes.hubTitle}>
            {title}
          </Typography>
        </Box>
      )}

      {shouldLinkTitle ? (
        <LinkPrefetch href={`/live/[liveid]`} as={`/live/${live.id}`} passHref>
          <Link
            variant="h2"
            className={classes.title}
            style={color ? { color } : {}}
          >
            {live.title}
          </Link>
        </LinkPrefetch>
      ) : (
        <Typography variant="h2" className={classes.title}>
          {live.title}
        </Typography>
      )}
      <Typography
        variant="h4"
        component="p"
        className={classes.description}
        color={shouldLinkTitle ? "textPrimary" : "textSecondary"}
      >
        📅 {date}
      </Typography>
      <Button
        size="large"
        color="secondary"
        variant="contained"
        className={classes.button}
        classes={{ iconSizeLarge: classes.buttonIcon }}
        onClick={handlePlay(live.id)}
        startIcon={<PlayIcon />}
      >
        {messages.play}
      </Button>
    </div>
  );
};

export default LiveCoverText;
