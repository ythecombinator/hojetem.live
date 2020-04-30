import {FunctionComponent} from 'react';

import {Container, Typography} from '@material-ui/core';

import Main from 'components/layout/main';

import {useStyles} from './styles';

const AboutPage: FunctionComponent = () => {
  const classes = useStyles({});

  return (
    <Main title="Sobre">
      <Container className={classes.container}>
        <div className={classes.logoContaineer}>
          <img className={classes.logo} src="./logo-large.svg" />
        </div>
        {/* Portuguese Version */}
        <Typography variant="h3" component="h1" paragraph>
          🇧🇷 Sobre
        </Typography>
        <Typography paragraph>
          Devido à epidemia do coronavírus, estamos em tempos de quarentena e
          vários shows foram cancelados no Brasil e em todo o mundo. Buscar
          maneiras de passar o tempo em casa se tornou tarefa recorrente dos
          brasileiros. Neste cenário, os artistas tem dado um jeitinho de manter
          os fãs animados com uma forma de entretenimento que está fazendo muito
          sucesso na internet: as lives!
        </Typography>
        <Typography paragraph>
          Os shows são transmitidos ao vivo através das redes sociais e garantem
          a alegria de quem sente falta daquele happy hour do fim de semana.
        </Typography>
        <Typography paragraph>
          O <b>hojetem.live</b> é uma plataforma open-source para acompanhar as
          lives oficiais feitas por artistas durante este período de quarentena.
        </Typography>
        <Typography paragraph>
          Então vem conferir com a gente as lives dos artistas dos próximos
          dias, lembrando que reunir os amigos só se for por videochamada. 😉
        </Typography>
        {/* English Version */}
        <Typography variant="h3" component="h1" paragraph>
          🇬🇧 About
        </Typography>
        <Typography paragraph>
          Due to this whole coronavirus pandemic, we are in quarantine times and
          several concerts have been canceled both in Brazil and around the
          world. Looking for ways to spend time at home has become a recurring
          task for Brazilians. In this scenario, artists have managed to keep
          their fans on loop with a way of entertainment that is very successful
          on the internet: live events!
        </Typography>
        <Typography paragraph>
          The concerts are broadcast through social networks and guarantee some
          fun for those who miss those good old happy hours on the weekends.
        </Typography>
        <Typography paragraph>
          <b>hojetem.live</b> is an open-source platform that allows you to
          follow the official lives made by artists during this quarantine
          period.
        </Typography>
        <Typography paragraph>
          Join us to check out the live concerts by famous artists for the next
          few days, and always remember that you can only get together with
          friends through video calls. 😉
        </Typography>
      </Container>
    </Main>
  );
};

export default AboutPage;
