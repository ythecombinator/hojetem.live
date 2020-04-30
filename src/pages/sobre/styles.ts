import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(2),
      maxWidth: "75vw",
    },
    logoContaineer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      width: "50%",
    },
  })
);
