import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    coverImage: {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 0,
      width: "100%"
    },
    coverImageInner: {
      height: "100vh",
      maxHeight: `calc(95vh - 48px)`,
      position: "relative",
      backgroundSize: "cover",
      backgroundPosition: "center",
      transition: theme.transitions.create("opacity"),
      opacity: 0.5
    },
    coverImageInnerActive: {
      opacity: 1
    },
    shadowLR: {
      display: "block",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      maxWidth: "80rem",
      height: "100%",
      zIndex: 2,
      opacity: 1,
      transition: theme.transitions.create("opacity", { duration: 1200 }),
      background:
        "linear-gradient(90deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0.9) 50%, rgba(18,18,18,0.75) 70%, rgba(18,18,18,0) 100%)"
    },
    shadowLRActive: {
      opacity: 0.9
    },
    shadowBT: {
      display: "block",
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: theme.spacing(24),
      zIndex: 2,
      background:
        "linear-gradient(0deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0.70) 50%, rgba(18,18,18,0) 100%)"
    }
  })
);
