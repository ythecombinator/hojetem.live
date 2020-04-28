import {
  Box,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Paper,
  Typography,
} from '@material-ui/core';

import LinkPrefetch from 'components/link-prefetch';

import {formatDate} from 'utils/date';

import {Live} from 'schemas/api';

import {useStyles} from './styles';

interface Props {
  live: Live;
}

// Helper components

const LiveCardHeader = (props: Props) => {
  const { live } = props;

  const classes = useStyles({});

  return (
    <CardHeader
      title={live.title}
      className={classes.header}
      classes={{ title: classes.headerTitle }}
    />
  );
};

const LiveCardMedia = (props: Props) => {
  const { live } = props;

  const classes = useStyles({});

  return (
    <LinkPrefetch href={`/live/[liveid]`} as={`/live/${live.id}`}>
      <a className={classes.link}>
        <CardActionArea>
          <CardMedia className={classes.media} image={live.banner}>
            <LiveCardInfo live={live} />
          </CardMedia>
        </CardActionArea>
      </a>
    </LinkPrefetch>
  );
};

const LiveCardInfo = (props: Props) => {
  const { live } = props;

  const classes = useStyles({});

  const artist = live.artists[0];
  const date = formatDate(live.datetime);

  return (
    <Box className="description">
      <Paper>
        <Box padding={1}>
          <Typography className={classes.details} variant="body2">
            🎤 {artist}
          </Typography>
          <Typography className={classes.details} variant="body2">
            📅 {date}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

// Main component

const LiveCard = (props: Props) => {
  const { live } = props;

  const classes = useStyles({});

  return (
    <Card className={classes.card} elevation={0}>
      <LiveCardMedia live={live} />
      <LiveCardHeader live={live} />
    </Card>
  );
};

export default LiveCard;
