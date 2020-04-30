import {Box, Button, Typography} from '@material-ui/core';
import {PlayArrowSharp as PlayIcon} from '@material-ui/icons';

import {formatDate} from 'utils/date';

import {Live} from 'schemas/api';

import {messages} from 'config/constants';

import {useStyles} from './styles';

interface Props {
  title?: string;
  live: Live;
  handlePlay: (liveId: number) => () => void;
}

const LiveCoverText = (props: Props) => {
  const { live, title, handlePlay } = props;

  const classes = useStyles({});

  const date = formatDate(live.datetime);

  return (
    <div className={classes.text}>
      {title && (
        <Box display="flex" alignItems="center" marginBottom={2}>
          <Typography variant="h4" className={classes.hubTitle}>
            {title}
          </Typography>
        </Box>
      )}

      <Typography variant="h2" className={classes.title}>
        {live.title}
      </Typography>

      <Typography
        variant="h4"
        component="p"
        className={classes.description}
        color={"textPrimary"}
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
        disabled={!live.active}
      >
        {messages.play}
      </Button>
      {!live.active && (
        <Typography
          variant="h6"
          component="p"
          className={classes.warning}
          color={"textSecondary"}
        >
          {messages.videoNotAvailable}
        </Typography>
      )}
    </div>
  );
};

export default LiveCoverText;
