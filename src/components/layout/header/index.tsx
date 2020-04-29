import {useCallback, useState} from 'react';

import {
  AppBar,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import {Menu as MenuIcon} from '@material-ui/icons/';

import GenresMenu from 'components/genres/menu';
import Sidebar from 'components/layout/sidebar';
import LinkPrefetch from 'components/link-prefetch';

import {useNavigation} from 'utils/navigation';

import {genres, routes} from 'config/constants';

import {useStyles} from './styles';

const Header = () => {
  const [drawer, setDrawer] = useState(false);
  const classes = useStyles({});
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setDrawer(open);
  };

  const MiniNav = () => (
    <>
      <Toolbar disableGutters={true}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        {!xs && (
          <>
            <Divider orientation="vertical" className={classes.headerDivider} />
            <FeaturedGenres />
            <Divider orientation="vertical" className={classes.headerDivider} />
          </>
        )}
        <LinkPrefetch href={routes.home} as={routes.home}>
          <a className={`${classes.headerLink}`}>
            <img src="/logo.svg" className={classes.logo} />
          </a>
        </LinkPrefetch>
      </Toolbar>
      <Drawer
        open={drawer}
        onClose={toggleDrawer(false)}
        onClick={toggleDrawer(false)}
      >
        <Sidebar className={classes.drawerNavigation} />
      </Drawer>
    </>
  );

  return (
    <AppBar
      className={classes.appBar}
      position="sticky"
      color="inherit"
      elevation={0}
    >
      <Hidden implementation="css" smDown>
        <Toolbar className={classes.toolbar} disableGutters={true}>
          <LinkPrefetch href={routes.home} as={routes.home}>
            <a className={`${classes.headerLink}`}>
              <img src="/logo.svg" className={classes.logo} />
            </a>
          </LinkPrefetch>

          <Divider orientation="vertical" className={classes.headerDivider} />
          <FeaturedGenres />
          <GenresMenu />
        </Toolbar>
      </Hidden>
      <Hidden implementation="css" mdUp>
        <MiniNav />
      </Hidden>
    </AppBar>
  );
};

const FeaturedGenres = () => {
  const classes = useStyles({});

  const { navigateToGenre } = useNavigation();

  const onMenuItemClick = useCallback(
    (genreId: string) => () => {
      navigateToGenre(genreId);
    },
    [navigateToGenre]
  );

  return (
    <>
      {genres
        .filter((genre) => genre.featured)
        .map((genre) => (
          <Typography
            title={genre.title}
            key={genre.id}
            className={classes.headerLink}
            onClick={onMenuItemClick(genre.id)}
          >
            <img
              src={`/genres/${genre.id}.svg`}
              className={classes.headerLinkIcon}
              alt=""
            />
            <span className={classes.headerLinkGenreLabel}>{genre.title}</span>
          </Typography>
        ))}
    </>
  );
};

export default Header;
