import ErrorPage from 'components/_pages/error';

export default ErrorPage;

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = (res
    ? res.statusCode
    : err
    ? err.statusCode
    : 404) as number;

  return { statusCode };
};
