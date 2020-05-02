import {FunctionComponent} from 'react';

import Head from 'next/head';

import Donate from 'components/donate';
import Footer from 'components/layout/footer';
import Header from 'components/layout/header';

import {defaultValues} from 'config/constants';

import {useStyles} from './styles';

interface Props {
  children: any;
  title?: string;
  description?: string;
  image?: string;
}

const Main: FunctionComponent<Props> = (props) => {
  const classes = useStyles({});

  const title = props.title
    ? `${props.title} • ${defaultValues.title}`
    : defaultValues.title;
  const image = props.image ? props.image : defaultValues.image;
  const description = props.description
    ? props.description
    : defaultValues.description;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:card"
          content={props.image ? "summary_large_image" : "summary"}
        />
        <meta name="twitter:site" content="" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta data-react-helmet="true" name="twitter-image" content={image} />
        <meta name="og:image:type" content="image/jpeg" />
        <meta name="og:image" content={image} />
        <meta name="og:image:secure_url" content={image} />
      </Head>
      <Header />
      <main className={classes.main}>
        {props.children}
        <Donate />
      </main>
      <Footer />
    </>
  );
};

export default Main;
