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

  const artist = live.artists[0];
  const date = new Date(live.datetime).toLocaleDateString("pt");
  const time = new Date(live.datetime).toLocaleTimeString("pt");

  const description = `${artist} • ${date} • ${time}`;

  return (
    <Box className="description">
      <Paper>
        <Box padding={1}>
          <Typography variant="body2">{description}</Typography>
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
