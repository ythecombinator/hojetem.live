import {Live} from 'schemas/api';

import {useStyles} from './styles';

interface Props {
  live: Live;
}

const HubSectionDividerImage = (props: Props) => {
  const { live } = props;

  const classes = useStyles({});

  return (
    <div
      className={classes.imageContainer}
      style={{
        backgroundImage: `url(${live.banner})`
      }}
    >
      <span className={classes.shadowRL}></span>
    </div>
  );
};

export default HubSectionDividerImage;
