import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    info: {
      display: "block",
      margin: theme.spacing(0, 2),
      [theme.breakpoints.up("sm")]: {
        margin: theme.spacing(0, 3),
      },
      [theme.breakpoints.up("md")]: {
        margin: theme.spacing(0, 4),
      },
    },
    infoLink: {
      color: theme.palette.text.secondary,
      textDecoration: "underline",
    },
  })
);
