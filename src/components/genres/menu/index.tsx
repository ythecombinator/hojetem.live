import {useCallback, useState} from 'react';

import {Button, ListItemIcon, ListItemText, Menu, MenuItem} from '@material-ui/core';
import {ArrowDropDown as GenresButtonIcon} from '@material-ui/icons/';

import {useNavigation} from 'utils/navigation';

import {genres, messages} from 'config/constants';

import {useStyles} from './styles';

const GenresMenu = () => {
  const classes = useStyles({});

  const { navigateToGenre } = useNavigation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const onMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onMenuClose = () => {
    setAnchorEl(null);
  };

  const onMenuItemClick = useCallback(
    (genreId: string) => () => {
      navigateToGenre(genreId);
      setAnchorEl(null);
    },
    [navigateToGenre]
  );

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
        {messages.allGenres}
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
          <MenuItem key={genre.id} onClick={onMenuItemClick(genre.id)}>
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
