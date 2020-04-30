import {FunctionComponent} from 'react';

import {Live} from 'schemas/api';

import {useStyles} from './styles';

interface Props {
  live: Live;
}

const isAboutToPlay = false;

const LiveCoverImage: FunctionComponent<Props> = (props) => {
  const { live } = props;

  const classes = useStyles({});

  const innerClasses = () => {
    if (isAboutToPlay) {
      return `${classes.coverImageInner} ${classes.coverImageInnerActive}`;
    }
    return classes.coverImageInner;
  };

  const shadowLRClasses = () => {
    if (isAboutToPlay) {
      return `${classes.shadowLR} ${classes.shadowLRActive}`;
    }
    return classes.shadowLR;
  };

  return (
    <div className={classes.coverImage}>
      <div
        className={innerClasses()}
        style={{
          backgroundImage: `url(${live.banner})`,
        }}
      ></div>
      <span className={shadowLRClasses()}></span>
      <span className={classes.shadowBT}></span>
    </div>
  );
};

export default LiveCoverImage;
