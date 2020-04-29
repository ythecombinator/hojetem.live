import {Box} from '@material-ui/core';
import YouTube, {Options} from 'react-youtube';

import {useStyles} from './styles';

interface Props {
  videoid: string;
}

const LiveVideo = (props: Props) => {
  const { videoid } = props;

  const classes = useStyles({});

  const opts: Options = {
    height: "100%",
    width: "100%",
    playerVars: { modestbranding: 1, playsinline: 1, rel: 0 },
  };

  const onPlayerReady = (event: any) => {
    event.target.playVideo();
  };

  return (
    <Box marginBottom={2} className={classes.container}>
      <YouTube
        className={classes.youtubePlayer}
        videoId={videoid}
        opts={opts}
        onReady={onPlayerReady}
      />
    </Box>
  );
};

export default LiveVideo;
