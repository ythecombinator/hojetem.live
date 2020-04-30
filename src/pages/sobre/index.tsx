import {Container, Link, Typography} from '@material-ui/core';

import Layout from 'components/layout/main';

import {useStyles} from './styles';

const Author = () => {
  return (
    <a href="https://www.ythecombinator.space/" target="_blank">
      <Link>Matheus Albuquerque</Link>
    </a>
  );
};

const About = () => {
  const classes = useStyles({});

  return (
    <Layout title="Sobre">
      <Container className={classes.container}>
        <div className={classes.logoContaineer}>
          <img className={classes.logo} src="./logo-large.svg" />
        </div>
        <Typography variant="h3" component="h1" paragraph>
          Sobre
        </Typography>
        <Typography paragraph>
          🇧🇷 O hojetem.live é uma plataforma open-source para acompanhar as
          lives oficiais feitas por artistas durante este período de quarentena
          por &nbsp; <Author />.
        </Typography>
        <Typography variant="h3" component="h1" paragraph>
          About
        </Typography>
        <Typography paragraph>
          🇬🇧 hojetem.live is an open source platform made by &nbsp;
          <Author /> that allows you to follow the official lives made by famous
          artists during this quarantine period .
        </Typography>
      </Container>
    </Layout>
  );
};

export default About;
