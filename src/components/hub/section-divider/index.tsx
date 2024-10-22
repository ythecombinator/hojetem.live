import {FunctionComponent} from 'react';

import HubSectionDividerImage from 'components/hub/section-divider/image';
import HubSectionDividerText from 'components/hub/section-divider/text';

import {Live} from 'schemas/api';

import {useStyles} from './styles';

interface Props {
  live: Live;
  color?: string;
}

const HubSectionDivider: FunctionComponent<Props> = (props) => {
  const { live, color } = props;

  const classes = useStyles({});

  return (
    <section className={classes.divider}>
      <HubSectionDividerImage live={live} />
      <HubSectionDividerText live={live} color={color} />
    </section>
  );
};

export default HubSectionDivider;
