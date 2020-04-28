import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      padding: theme.spacing(2, 4),
      marginRight: theme.spacing(2),
      fontSize: theme.typography.fontSize * 1.7,
      lineHeight: 1
    },
    buttonIcon: {
      "& > :first-child": {
        fontSize: theme.typography.fontSize * 3
      }
    },
    text: {
      position: "relative",
      padding: theme.spacing(12, 2),
      maxWidth: "48rem",
      minHeight: "500px",
      zIndex: 1,
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(12, 3)
      },
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(12, 4)
      }
    },
    title: {
      fontWeight: 800,
      paddingBottom: theme.spacing(2),
      display: "inline-block",
      lineHeight: 1
    },
    description: {
      fontWeight: 600,
      marginBottom: theme.spacing(4)
    }
  })
);
