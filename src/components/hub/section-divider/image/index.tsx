import {FunctionComponent} from 'react';

import {Live} from 'schemas/api';

import {useStyles} from './styles';

interface Props {
  live: Live;
}

const HubSectionDividerImage: FunctionComponent<Props> = (props) => {
  const { live } = props;

  const classes = useStyles({});

  return (
    <div
      className={classes.imageContainer}
      style={{
        backgroundImage: `url(${live.banner})`,
      }}
    >
      <span className={classes.shadow}></span>
    </div>
  );
};

export default HubSectionDividerImage;
