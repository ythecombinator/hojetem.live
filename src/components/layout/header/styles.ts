import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      borderBottom: `1px solid ${theme.palette.divider}`,
      padding: theme.spacing(0, 4, 0, 2),
    },
    drawerNavigation: {
      maxWidth: "300px",
      padding: theme.spacing(1),
    },
    headerDivider: {
      height: "60px",
      margin: theme.spacing(0, 2),
    },
    headerLink: {
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
      "&:hover": {
        borderColor: theme.palette.divider,
      },
      [theme.breakpoints.up("sm")]: {
        paddingRight: theme.spacing(1),
        padding: theme.spacing(0, 1),
        borderBottom: "4px solid transparent",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: theme.typography.fontSize * 1.45,
        paddingRight: theme.spacing(1.5),
        padding: theme.spacing(0, 1.5),
      },
      [theme.breakpoints.up("xl")]: {
        paddingRight: theme.spacing(2),
        padding: theme.spacing(0, 2),
      },
    },
    headerLinkActive: {
      borderColor: "white",
    },
    headerLinkIcon: {
      width: theme.spacing(3),
      height: theme.spacing(3),
      [theme.breakpoints.up("lg")]: {
        marginRight: theme.spacing(1),
      },
    },
    headerLinkGenreLabel: {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    logo: {
      minWidth: "100px",
    },
    search: {
      width: "100%",
      margin: 0,
      [theme.breakpoints.up("md")]: {
        margin: theme.spacing(0, 0, 0, 2),
        width: "250px",
      },
    },
    toolbar: {
      justifyContent: "space-between",
      alignItems: "center",
    },
    userPicture: {
      marginLeft: theme.spacing(2),
    },
  })
);
