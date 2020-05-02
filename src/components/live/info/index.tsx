import {FunctionComponent} from 'react';

import {Link, Typography} from '@material-ui/core';

import Share from 'components/share';

import {formatDate} from 'utils/date';

import {Live} from 'schemas/api';

import {useStyles} from './styles';

interface Props {
  live: Live;
}

const LiveInfo: FunctionComponent<Props> = (props) => {
  const { live } = props;

  const classes = useStyles({});

  const date = formatDate(live.datetime);

  return (
    <section className={classes.info}>
      <header className={classes.header}>
        <Typography variant="h4" component="h1">
          {live.title}
        </Typography>
        <Share className={classes.share} live={live} />
      </header>

      <Typography variant="h5" component="p" color="textSecondary" paragraph>
        <a href={live.youtubeChannel} target="_blank">
          <Link className={classes.infoLink}>{live.artists}</Link>
        </a>
      </Typography>

      <Typography variant="body1" color="textSecondary">
        📅 {date}
      </Typography>
    </section>
  );
};

export default LiveInfo;
