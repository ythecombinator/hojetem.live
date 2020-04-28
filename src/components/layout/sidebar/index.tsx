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

import {Genre} from 'schemas/api';

import {genres} from 'config/constants';

import {useStyles} from './styles';

// Helper components

interface GenreLinkProps {
  genre: Genre;
}

const GenreLink = (props: GenreLinkProps) => {
  const { genre } = props;

  const classes = useStyles({});

  return (
    <a className={classes.link} href={`#${genre.id}`} key={genre.id}>
      <ListItem button>
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
    </a>
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
              Genres
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
              More Genres
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
