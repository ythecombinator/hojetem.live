import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(2),
    },
    logoContaineer: {
      display: "flex",
      justifyContent: "center",
    },
    logo: {
      width: "50%",
    },
  })
);
