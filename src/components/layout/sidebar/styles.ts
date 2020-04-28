import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subheader: {
      backgroundColor: theme.palette.background.paper
    },
    link: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      fontSize: theme.typography.fontSize * 1.45,
      height: theme.spacing(8),
      color: "white",
      textDecoration: "none",
      textTransform: "none",
      whiteSpace: "nowrap",
      fontWeight: "bold",
      [theme.breakpoints.up("sm")]: {
        paddingRight: theme.spacing(1),
        padding: theme.spacing(0, 1),
        borderBottom: "4px solid transparent"
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: theme.typography.fontSize * 1.45,
        paddingRight: theme.spacing(1.5),
        padding: theme.spacing(0, 1.5)
      },
      [theme.breakpoints.up("xl")]: {
        paddingRight: theme.spacing(2),
        padding: theme.spacing(0, 2)
      }
    }
  })
);
