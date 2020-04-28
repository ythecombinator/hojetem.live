import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    group: {
      width: "100%",
      overflow: "auto",
      paddingLeft: theme.spacing(2),
      scrollSnapType: "x mandatory",
      scrollPadding: theme.spacing(0, 0, 0, 2),
      [theme.breakpoints.up("sm")]: {
        scrollPadding: theme.spacing(0, 0, 0, 3),
        paddingLeft: theme.spacing(3)
      },
      [theme.breakpoints.up("md")]: {
        scrollPadding: theme.spacing(0, 0, 0, 4),
        paddingLeft: theme.spacing(4)
      }
    },
    groupItem: {
      flexShrink: 0,
      scrollSnapAlign: "start",
      marginBottom: theme.spacing(2),
      width: `calc((100vw - ${theme.spacing(4)}px - ${theme.spacing(
        2
      )}px) / 2)`,
      [theme.breakpoints.up("sm")]: {
        width: `calc((100vw - ${theme.spacing(6)}px - ${theme.spacing(
          3
        )}px) / 3)`
      },
      [theme.breakpoints.up("md")]: {
        width: `calc((100vw - ${theme.spacing(8)}px - ${theme.spacing(
          3
        )}px) / 4)`
      },
      [theme.breakpoints.up("lg")]: {
        width: `calc((100vw - ${theme.spacing(8)}px - ${theme.spacing(
          5
        )}px) / 5)`
      },
      [theme.breakpoints.up("xl")]: {
        width: `calc((100vw - ${theme.spacing(8)}px - ${theme.spacing(
          6
        )}px) / 6)`
      }
    },
    groupTitle: {
      display: "flex",
      margin: theme.spacing(0, 0, 2, 2),
      color: theme.palette.text.secondary,
      lineHeight: 1,
      [theme.breakpoints.up("sm")]: {
        margin: theme.spacing(0, 0, 2, 3)
      },
      [theme.breakpoints.up("md")]: {
        margin: theme.spacing(0, 0, 3, 4)
      }
    },
    groupIcon: {
      maxWidth: theme.spacing(4),
      height: theme.spacing(4),
      margin: theme.spacing(0, 1.5, 0, 0)
    }
  })
);
