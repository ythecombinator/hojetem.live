import {useEffect, useState} from 'react';

import {Grid, Link} from '@material-ui/core';
import {ChevronRight as TitleLinkIcon} from '@material-ui/icons';

import LinkPrefetch from 'components/link-prefetch';
import LiveCard from 'components/live/card';

import {Live} from 'schemas/api';

import {useStyles} from './styles';

interface Props {
  title: string;
  slug: string;
  content: Live[];
}

// Helper components

const LiveGroupTitle = (props: Props) => {
  const { title, slug } = props;

  const classes = useStyles({});

  return (
    <LinkPrefetch href="/genre/[topicid]" as={`/genre/${slug}`} passHref>
      <Link color="inherit" className={classes.groupTitle} variant="h4">
        <img src={`/genres/${slug}.svg`} className={classes.groupIcon} alt="" />
        {title}
        <TitleLinkIcon fontSize="large" />
      </Link>
    </LinkPrefetch>
  );
};

// Main component

const LiveGroup = (props: Props) => {
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
