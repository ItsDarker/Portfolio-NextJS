import React, { useState } from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {
  ExperienceContainer,
  ExperienceCard,
  ExperienceHeader,
  ExperienceTitle,
  ExperienceCompany,
  ExperienceDuration,
  ExperienceLocation,
  ExperienceDescription,
  HighlightsList,
  HighlightItem,
  TagContainer,
  Tag,
} from './ExperienceStyles';
import { experienceData } from '../../constants/constants';

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <Section id="experience">
      <SectionTitle>Professional Experience</SectionTitle>
      <SectionText>
        My journey through development, automation, and cybersecurity with hands-on experience
        across full-stack development, DevSecOps, and enterprise security infrastructure.
      </SectionText>
      <ExperienceContainer>
        {experienceData.map((exp, index) => (
          <ExperienceCard
            key={index}
            isExpanded={expandedIndex === index}
            onClick={() => toggleExpand(index)}
          >
            <ExperienceHeader>
              <div>
                <ExperienceTitle>{exp.title}</ExperienceTitle>
                <ExperienceCompany>{exp.company}</ExperienceCompany>
                <ExperienceDuration>{exp.duration}</ExperienceDuration>
                <ExperienceLocation>{exp.location}</ExperienceLocation>
              </div>
            </ExperienceHeader>

            {expandedIndex === index && (
              <>
                <ExperienceDescription>{exp.description}</ExperienceDescription>
                <HighlightsList>
                  {exp.highlights.map((highlight, hIndex) => (
                    <HighlightItem key={hIndex}>{highlight}</HighlightItem>
                  ))}
                </HighlightsList>
              </>
            )}

            <TagContainer>
              {exp.tags.map((tag, tIndex) => (
                <Tag key={tIndex}>{tag}</Tag>
              ))}
            </TagContainer>
          </ExperienceCard>
        ))}
      </ExperienceContainer>
      <SectionDivider />
    </Section>
  );
};

export default Experience;
