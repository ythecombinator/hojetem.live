import {FunctionComponent} from 'react';

import {Button, Link, Typography} from '@material-ui/core';
import {PlayArrowSharp as PlayIcon} from '@material-ui/icons';
import Router from 'next/router';

import LinkPrefetch from 'components/link-prefetch';

import {Live} from 'schemas/api';

import {messages} from 'config/constants';

import {useStyles} from './styles';

interface Props {
  live: Live;
  color?: string;
}

const HubSectionDividerText: FunctionComponent<Props> = (props) => {
  const { live, color } = props;

  const classes = useStyles({});

  const handlePlay = () => {
    Router.push(`/[liveid]`, `/${live.id}`);
  };

  return (
    <div className={classes.text}>
      <LinkPrefetch href={`/[liveid]`} as={`/${live.id}`} passHref>
        <Link
          variant="h3"
          className={classes.title}
          style={color ? { color } : {}}
        >
          {live.title}
        </Link>
      </LinkPrefetch>
      <Typography variant="h5" className={classes.description}>
        {live.artists}
      </Typography>
      <Button
        size="large"
        color="secondary"
        variant="contained"
        className={classes.button}
        classes={{ iconSizeLarge: classes.buttonIcon }}
        onClick={handlePlay}
        startIcon={<PlayIcon />}
      >
        {messages.play}
      </Button>
    </div>
  );
};

export default HubSectionDividerText;
