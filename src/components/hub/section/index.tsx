import {Box} from '@material-ui/core';

import LiveGroup from 'components/live/group';

import {Live} from 'schemas/api';

interface Props {
  title: string;
  slug: string;
  content: Live[];
}

const HubSection = (props: Props) => {
  const { title, slug, content } = props;

  return (
    <Box id={slug} marginBottom={8} component="section">
      <LiveGroup title={title} slug={slug} content={content} />
    </Box>
  );
};

export default HubSection;
