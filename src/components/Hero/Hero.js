import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Security Engineer | DevSecOps | Full-Stack Developer';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants}>
              <SectionTitle main center>
                FINO FRANKLIN <br />
                JOHN BOSCO
              </SectionTitle>
            </motion.div>
            <motion.div variants={itemVariants}>
              <SectionText>{displayText}</SectionText>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button
                onClick={() => {
                  const resumeUrl = window.location.origin + '/resume.pdf';
                  window.open(resumeUrl, '_blank', 'noopener,noreferrer');
                }}
              >
                View Resume
              </Button>
            </motion.div>
          </motion.div>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;