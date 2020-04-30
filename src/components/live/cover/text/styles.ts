import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      padding: theme.spacing(2, 4),
      marginRight: theme.spacing(2),
      fontSize: theme.typography.fontSize * 1.7,
      lineHeight: 1,
    },
    buttonIcon: {
      "& > :first-child": {
        fontSize: theme.typography.fontSize * 3,
      },
    },
    description: {
      fontWeight: 600,
      marginBottom: theme.spacing(4),
    },
    warning: {
      fontWeight: 500,
      marginTop: theme.spacing(4),
    },
    hubTitle: { textTransform: "capitalize", fontWeight: 500 },
    text: {
      position: "relative",
      margin: theme.spacing(0, 2),
      maxWidth: "48rem",
      zIndex: 1,
      [theme.breakpoints.up("sm")]: {
        margin: theme.spacing(0, 3),
      },
      [theme.breakpoints.up("md")]: {
        margin: theme.spacing(0, 4),
      },
    },
    title: {
      fontWeight: 800,
      paddingBottom: theme.spacing(2),
      display: "inline-block",
      lineHeight: 1,
    },
  })
);
