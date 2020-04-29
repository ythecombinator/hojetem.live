import {useCallback} from 'react';

import {
  Divider,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
} from '@material-ui/core';

import {useNavigation} from 'utils/navigation';

import {Genre} from 'schemas/api';

import {genres, messages} from 'config/constants';

import {useStyles} from './styles';

// Helper components

interface GenreLinkProps {
  genre: Genre;
}

const GenreLink = (props: GenreLinkProps) => {
  const { genre } = props;

  const classes = useStyles({});
  const { navigateToGenre } = useNavigation();

  const onMenuItemClick = useCallback(
    (genreId: string) => () => {
      navigateToGenre(genreId);
    },
    [navigateToGenre]
  );

  return (
    <ListItem
      className={classes.link}
      onClick={onMenuItemClick(genre.id)}
      button
    >
      <ListItemIcon>
        <Icon>
          <img
            src={`/genres/${genre.id}.svg`}
            style={{
              display: "block",
              height: "100%",
              width: "100%",
            }}
          />
        </Icon>
      </ListItemIcon>
      <ListItemText primary={`${genre.title}`} />
    </ListItem>
  );
};

// Main component

interface Props {
  className?: string;
}

const Sidebar = (props: Props) => {
  const { className } = props;

  const classes = useStyles({});

  return (
    <nav className={className}>
      <Paper>
        <List
          aria-labelledby="genre-list-subheader-genres"
          subheader={
            <ListSubheader
              id="genre-list-subheader-genres"
              className={classes.subheader}
            >
              {messages.highlightedGenres}
            </ListSubheader>
          }
        >
          {genres
            .filter((genre) => genre.featured)
            .map((genre) => (
              <GenreLink key={genre.id} genre={genre} />
            ))}
        </List>
        <Divider />
        <List
          aria-labelledby="genre-list-subheader-more-genres"
          subheader={
            <ListSubheader
              id="genre-list-subheader-more-genres"
              className={classes.subheader}
            >
              {messages.otherGenres}
            </ListSubheader>
          }
        >
          {genres
            .filter((genre) => !genre.featured)
            .map((genre) => (
              <GenreLink key={genre.id} genre={genre} />
            ))}
        </List>
      </Paper>
    </nav>
  );
};

export default Sidebar;
