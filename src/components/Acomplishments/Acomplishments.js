import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { achievementsData, certificationsData } from '../../constants/constants';

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {achievementsData.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>

    <SectionTitle style={{ marginTop: '60px' }}>Certifications</SectionTitle>
    <Boxes>
      {certificationsData.map((cert, index) => (
        <Box key={index}>
          <BoxNum style={{ fontSize: '1.5rem' }}>{cert.name}</BoxNum>
          <BoxText>{cert.fullName}</BoxText>
        </Box>
      ))}
    </Boxes>

    <SectionDivider/>
  </Section>
);

export default Acomplishments;
