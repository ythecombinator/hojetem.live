import {FunctionComponent, useEffect, useState} from 'react';

import {Grid, Typography} from '@material-ui/core';

import LiveCard from 'components/live/card';

import {Live} from 'schemas/api';

import {useStyles} from './styles';

interface Props {
  title: string;
  slug: string;
  content: Live[];
}

// Helper components

const LiveGroupTitle: FunctionComponent<Props> = (props) => {
  const { title, slug } = props;

  const classes = useStyles({});

  return (
    <Typography color="inherit" className={classes.groupTitle} variant="h4">
      <img src={`/genres/${slug}.svg`} className={classes.groupIcon} alt="" />
      {title}
    </Typography>
  );
};

// Main component

const LiveGroup: FunctionComponent<Props> = (props) => {
  const { title, slug, content } = props;

  const classes = useStyles({});

  const [isWindows, setIsWindows] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const platform = window.navigator.platform;
      if (["Win32", "Win64", "Windows", "WinCE"].includes(platform)) {
        setIsWindows(true);
      } else {
        setIsWindows(false);
      }
    }
  }, [typeof window !== "undefined"]);

  return (
    <>
      <LiveGroupTitle title={title} slug={slug} content={content} />
      <Grid
        container
        spacing={1}
        className={classes.group}
        wrap={isWindows ? "wrap" : "nowrap"}
      >
        {content.map((live) => (
          <Grid
            className={classes.groupItem}
            key={live.id}
            item
            component="article"
          >
            <LiveCard live={live}></LiveCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default LiveGroup;
