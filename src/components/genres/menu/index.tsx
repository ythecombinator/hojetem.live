import {useState} from 'react';

import {Button, ListItemIcon, ListItemText, Menu, MenuItem} from '@material-ui/core';
import {ArrowDropDown as GenresButtonIcon} from '@material-ui/icons/';

import {genres} from 'config/constants';

import {useStyles} from './styles';

const GenresMenu = () => {
  const classes = useStyles({});

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const onMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onMenuClose = () => {
    setAnchorEl(null);
  };

  const onMenuItemClick = (genreId: string) => {
    document.getElementById(genreId)!.scrollIntoView();
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="default"
        onClick={onMenuOpen}
        className={classes.genresButton}
        endIcon={<GenresButtonIcon />}
      >
        Genres
      </Button>
      <Menu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        onClose={onMenuClose}
        transitionDuration={{ enter: 200, exit: 0 }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {genres.map((genre) => (
          <MenuItem key={genre.id} onClick={(_) => onMenuItemClick(genre.id)}>
            <ListItemIcon>
              <img
                src={`/genres/${genre.id}.svg`}
                className={classes.genreIcon}
                alt=""
              />
            </ListItemIcon>
            <ListItemText primary={genre.title} />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default GenresMenu;
