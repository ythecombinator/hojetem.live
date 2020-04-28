import {createStyles, makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    header: {
      width: "100%",
      position: "relative",
      minHeight: `calc(85vh - 48px)`,
      display: "flex",
      alignItems: "center",
    },
  })
);
