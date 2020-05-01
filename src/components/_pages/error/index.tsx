import {Container, Typography} from '@material-ui/core';
import {NextPage} from 'next';

import Main from 'components/layout/main';

import {getRandomInt} from 'utils/number';

import {errorStatus} from 'config/constants';

import {useStyles} from './styles';

const getErrorStatus = (statusCode: number) => {
  const randomErrorStatus = getRandomInt(0, 4);

  const error =
    statusCode === 404
      ? { image: 1, message: "Não achamos nenhuma live neste endereço 😭" }
      : errorStatus[randomErrorStatus];

  return error;
};

interface Props {
  statusCode: number;
}

const ErrorPage: NextPage<Props> = (props) => {
  const classes = useStyles({});

  const { statusCode } = props;

  const error = getErrorStatus(statusCode);
  const is404 = statusCode === 404;

  return (
    <Main title="Erro">
      <Container className={classes.container}>
        <div className={classes.imageContainer}>
          <img className={classes.image} src={`./error/${error.image}.png`} />
        </div>
        <Typography variant="h3" component="h1" paragraph>
          {error.message}
        </Typography>
        {!is404 ? (
          <Typography paragraph>
            Infelizmente, tivemos um problema ao tentar acessar a live que você
            requisitou. Tente recarregar a página. Se o problema persistir, fale
            conosco no Twitter (<i>@_hojetemlive</i>) ou no Instagram (
            <i>_hojetemlive</i>) e faremos o possível para resolver 😉.
          </Typography>
        ) : (
          <Typography paragraph>
            Desculpe, não encontramos nenhuma live com este identificador 😕.
            Por favor, confira o link e tente acessar novamente 🙏.
          </Typography>
        )}
      </Container>
    </Main>
  );
};

export default ErrorPage;
