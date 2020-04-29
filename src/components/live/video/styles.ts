import {createStyles, makeStyles, Theme} from '@material-ui/core';

import {sizes} from 'config/constants';

const { appBarHeight, livePagePrimaryContentHeight } = sizes;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: "relative",
      height: "50vh",
      width: "100vw",
      maxHeight: `calc(100vh - ${appBarHeight} - ${livePagePrimaryContentHeight})`,
      [theme.breakpoints.up("md")]: {
        height: "100vh",
      },
    },
    youtubePlayer: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
  })
);
