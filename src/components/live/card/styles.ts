import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      backgroundColor: "transparent",
      "&:hover": {
        "& .controls": {
          opacity: 1
        },
        "& .description": {
          opacity: 1
        }
      }
    },
    header: {
      padding: theme.spacing(1, 0, 0, 0)
    },
    headerTitle: {
      position: "relative",
      height: "2.66em",
      overflow: "hidden",
      textOverflow: "ellipsis",
      "& .controls": {
        opacity: 0,
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: theme.palette.background.default,
        width: "100%",
        height: "100%",
        textAlign: "center",
        transition: theme.transitions.create("opacity")
      }
    },
    link: {
      textDecoration: "none",
      color: "inherit"
    },
    media: {
      paddingBottom: "56.25%" /* 16:9 aspect ratio */,
      height: 0,
      overflow: "hidden",
      position: "relative",
      "& .description": {
        height: "100%",
        opacity: 0,
        transition: theme.transitions.create("opacity")
      }
    }
  })
);
