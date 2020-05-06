import React, {FunctionComponent} from 'react';

import {Box} from '@material-ui/core';

import HubSection from 'components/hub/section';
import HubSectionDivider from 'components/hub/section-divider';
import LiveCover from 'components/live/cover';

import {chunk} from 'utils/array';

import {Genre, LivesHub} from 'schemas/api';

interface Props {
  livesHub: LivesHub;
  genresList: Genre[];
}

const Hub: FunctionComponent<Props> = (props) => {
  const { livesHub, genresList } = props;
  const { featured, genres } = livesHub;

  const [firstSection, secondSection, thirdSection] = chunk<Genre>(
    genresList,
    5
  );

  return (
    <>
      <LiveCover live={featured[0]} />

      <main style={{ position: "relative" }}>
        {firstSection.map((genre) => {
          if (genres[genre.id]) {
            return (
              <HubSection
                key={genre.id}
                title={genre.title}
                slug={genre.id}
                content={genres[genre.id]}
              />
            );
          }
        })}

        <Box marginBottom={8} component="section">
          <HubSectionDivider live={featured[1]} />
        </Box>

        {secondSection.map((genre) => {
          if (genres[genre.id]) {
            return (
              <HubSection
                key={genre.id}
                title={genre.title}
                slug={genre.id}
                content={genres[genre.id]}
              />
            );
          }
        })}

        <Box marginBottom={8} component="section">
          <HubSectionDivider live={featured[2]} />
        </Box>

        {thirdSection.map((genre) => {
          if (genres[genre.id]) {
            return (
              <HubSection
                key={genre.id}
                title={genre.title}
                slug={genre.id}
                content={genres[genre.id]}
              />
            );
          }
        })}
      </main>
    </>
  );
};

export default Hub;
