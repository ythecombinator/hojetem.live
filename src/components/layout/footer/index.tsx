import {Box, Container, Grid, Link, Typography} from '@material-ui/core';
import {Facebook as FacebookIcon, Twitter as TwitterIcon} from '@material-ui/icons';
import NextLink from 'next/link';

import {useStyles} from './styles';

const Footer = () => {
  const classes = useStyles({});
  return (
    <Container className={classes.container} component="footer">
      <Typography variant="caption" color="textSecondary">
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item>&copy; Hoje Tem Live!, all rights reserved.</Grid>
          <Grid item>
            <Box display="flex" alignItems="center">
              <TwitterIcon fontSize="small" />
              &nbsp;
              <NextLink
                href="https://twitter.com/Hero35Official"
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
              <FacebookIcon fontSize="small" />
              &nbsp;
              <NextLink
                href="https://www.facebook.com/hero35official/"
                passHref
                prefetch={false}
              >
                <Link target="_blank" color="inherit">
                  Facebook
                </Link>
              </NextLink>
            </Box>
          </Grid>
        </Grid>
      </Typography>
    </Container>
  );
};

export default Footer;
