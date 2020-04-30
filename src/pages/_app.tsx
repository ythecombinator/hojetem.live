import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/styles';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

import {trackPageview} from 'utils/analytics';

import 'styles/global.css';
import theme from 'styles/theme';

NProgress.configure({ showSpinner: false });

let doneLoading = true;

Router.events.on("routeChangeStart", () => {
  doneLoading = false;
  setTimeout(() => {
    if (!doneLoading) {
      NProgress.start();
    }
  }, 300);
});

Router.events.on("routeChangeError", () => {
  doneLoading = true;
  NProgress.done();
});

Router.events.on("routeChangeComplete", (url: string) => {
  if (window.location.hostname !== "localhost") {
    trackPageview(url);
  }
  doneLoading = true;
  NProgress.done();
});

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Hoje Tem Live!</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
