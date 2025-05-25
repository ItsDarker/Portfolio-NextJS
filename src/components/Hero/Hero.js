import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
      <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>I am a Cybersecurity-Focused Software Engineer</SectionText>
        <Button
          onClick={() => {
            const resumeUrl = window.location.origin + '/resume.pdf';
            window.open(resumeUrl, '_blank', 'noopener,noreferrer');
          }}
        >
          View Resume
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;