import {Box, Container, Grid, Link, Typography} from '@material-ui/core';
import {Instagram as InstagramIcon, Twitter as TwitterIcon} from '@material-ui/icons';
import NextLink from 'next/link';

import {messages, socialNetworks} from 'config/constants';

import {useStyles} from './styles';

const Footer = () => {
  const classes = useStyles({});
  return (
    <Container className={classes.container} component="footer">
      <Typography variant="caption" color="textSecondary">
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item>{messages.copyright}</Grid>
          <Grid item>
            <Box display="flex" alignItems="center">
              <TwitterIcon fontSize="small" />
              &nbsp;
              <NextLink
                href={`https://twitter.com/${socialNetworks.twitter}`}
                passHref
                prefetch={false}
              >
                <Link target="_blank" color="inherit">
                  Twitter
                </Link>
              </NextLink>
            </Box>
          </Grid>
          <Grid item>
            <Box display="flex" alignItems="center">
              <InstagramIcon fontSize="small" />
              &nbsp;
              <NextLink
                href={`https://www.instagram.com/${socialNetworks.instagram}`}
                passHref
                prefetch={false}
              >
                <Link target="_blank" color="inherit">
                  Instagram
                </Link>
              </NextLink>
            </Box>
          </Grid>
          <Grid item>
            <NextLink href="/sobre" as="/sobre" passHref prefetch={false}>
              <Link color="inherit">Sobre</Link>
            </NextLink>
          </Grid>
        </Grid>
      </Typography>
    </Container>
  );
};

export default Footer;
