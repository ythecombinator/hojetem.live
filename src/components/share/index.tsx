import {FunctionComponent, useCallback} from 'react';

import {Button} from '@material-ui/core';
import {Share as ShareIcon} from '@material-ui/icons';
import {Facebook, Mail, Telegram, Twitter, Whatsapp} from 'react-social-sharing';

import {useWebShare} from 'utils/dom';

import {Live} from 'schemas/api';

import {messages, urls} from 'config/constants';

interface Props {
  className?: string;
  live: Live;
}

const Share: FunctionComponent<Props> = (props) => {
  const { className, live } = props;

  const link = `${urls.main}/${live.id}`;

  const { isSupported, share } = useWebShare();

  const onClick = useCallback(() => {
    share({
      title: live.title,
      text: messages.shareMessage.generic,
      url: link,
    });
  }, []);

  return isSupported ? (
    <div className={className}>
      <Button
        size="medium"
        color="secondary"
        variant="contained"
        onClick={onClick}
        startIcon={<ShareIcon />}
        disabled={!live.active}
      >
        {messages.share}
      </Button>
    </div>
  ) : (
    <div className={className}>
      <Facebook solid link={link} />
      <Twitter solid message={messages.shareMessage.twitter} link={link} />
      <Whatsapp solid message={messages.shareMessage.whatsapp} link={link} />
      <Telegram solid message={messages.shareMessage.telegram} link={link} />
      <Mail solid medium subject={messages.shareMessage.mail} link={link} />
    </div>
  );
};

export default Share;
