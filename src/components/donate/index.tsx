import React, {useState} from 'react';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

import {useTimeout} from 'utils/timing';

import {messages, urls} from 'config/constants';

import {useStyles} from './styles';

const Donate = () => {
  const classes = useStyles({});

  const [open, setOpen] = useState(false);

  useTimeout(() => {
    setOpen(true);
  }, 3000);

  const handleClose = (
    _: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
        message={messages.donate.message}
        action={
          <React.Fragment>
            <a className={classes.link} href={urls.donate} target="_blank">
              <Button color="secondary" size="small">
                {messages.donate.callForAction}
              </Button>
            </a>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};

export default Donate;
