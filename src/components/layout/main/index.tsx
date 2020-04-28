import Head from 'next/head';

import Footer from 'components/layout/footer';
import Header from 'components/layout/header';

import {useStyles} from './styles';

interface Props {
  children: any;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

const Layout = (props: Props) => {
  const { children, title, description, keywords, image } = props;

  const classes = useStyles({});

  const headTitle = title ? title : "Hoje Tem Live!";

  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`React,ReactJS,${keywords}`} />
        <meta property="og:title" content={headTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:card"
          content={image ? "summary_large_image" : "summary"}
        />
        <meta name="twitter:site" content="@hero35official" />
        <meta name="twitter:title" content={headTitle} />
        <meta name="twitter:description" content={description} />
        <meta
          data-react-helmet="true"
          name="twitter-image"
          content={image ? image : "https://hero35.com/banner.png"}
        />
        <meta name="og:image:type" content="image/jpeg" />
        <meta
          name="og:image"
          content={image ? image : "https://hero35.com/banner.png"}
        />
        <meta
          name="og:image:secure_url"
          content={image ? image : "https://hero35.com/banner.png"}
        />
      </Head>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
