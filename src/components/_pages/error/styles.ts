import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(2),
    },
    imageContainer: {
      display: "flex",
      justifyContent: "center",
    },
    image: {
      maxWidth: 250,
      margin: theme.spacing(4),
    },
  })
);
