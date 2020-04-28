import {createStyles, fade, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    genresButton: {
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      color: theme.palette.text.primary,
      textTransform: "none",
      lineHeight: 1,
      padding: theme.spacing(1, 2),
      fontSize: theme.typography.fontSize * 1.45,
      margin: theme.spacing(0, 2),
    },
    genreIcon: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  })
);
