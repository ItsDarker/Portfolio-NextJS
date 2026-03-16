import React from 'react';
import { motion } from 'framer-motion';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <Section id="projects">
      <SectionTitle main>Featured Projects</SectionTitle>
      <GridContainer
        as={motion.div}
        variants={containerVariants}
        initial="visible"
        animate="visible"
      >
        {projects.map((p, i) => {
          return (
            <motion.div key={i} variants={cardVariants}>
              <BlogCard featured={p.featured}>
                  <Img src={p.image} />
                  <TitleContent>
                    <HeaderThree>{p.title}</HeaderThree>
                    <Hr />
                  </TitleContent>
                  <CardInfo className="card-info">{p.description}</CardInfo>
                  <div>
                    <TitleContent>Tools</TitleContent>
                    <TagList>
                      {p.tags.map((t, i) => {
                        return <Tag key={i}>{t}</Tag>;
                      })}
                    </TagList>
                  </div>
                  <UtilityList>
                    <ExternalLinks href={p.visit}>View Code</ExternalLinks>
                  </UtilityList>
                </BlogCard>
              </motion.div>
            );
          })}
      </GridContainer>
      <SectionDivider divider />
    </Section>
  );
};

export default Projects;