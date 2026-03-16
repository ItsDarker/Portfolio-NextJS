import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useMemo, useEffect } from 'react';
import { HeroTitleContainer, IntroOverlay, IntroInner, IntroLetter, IntroFade, HeroSection, HeroSticky, HeroName, ShimmerText } from './HeroTitleStyles';

const HeroTitleContent = ({ name, subtitle, sectionRef, introDone }) => {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const yRaw = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scaleRaw = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacityRaw = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  const y = useSpring(yRaw, { stiffness: 120, damping: 24 });
  const scale = useSpring(scaleRaw, { stiffness: 120, damping: 24 });
  const opacity = useSpring(opacityRaw, { stiffness: 120, damping: 24 });

  return (
    <>
      {!introDone && (
        <HeroIntro name={name} onComplete={() => {}} />
      )}

      <HeroSection ref={sectionRef}>
        <HeroSticky
          style={{
            y,
            scale,
            opacity,
          }}
        >
          <ShimmerText as={motion.h1} className="hero-title">
            {name.split('\n').map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </ShimmerText>

          {subtitle && (
            <motion.p
              style={{ marginTop: '1.5rem', color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem' }}
              initial={{ opacity: 0, y: 16 }}
              animate={introDone ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {subtitle}
            </motion.p>
          )}
        </HeroSticky>
      </HeroSection>
    </>
  );
};

const HeroIntro = ({ name, onComplete }) => {
  const letters = useMemo(() => name.split(''), [name]);

  return (
    <IntroOverlay
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <IntroInner>
        {letters.map((char, i) => (
          <IntroLetter
            key={`${char}-${i}`}
            initial={{ opacity: 0, filter: 'blur(12px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{
              duration: 0.22,
              delay: i * 0.08,
              ease: 'easeOut',
            }}
            onAnimationComplete={() => {
              if (i === letters.length - 1) {
                setTimeout(() => onComplete(), 650);
              }
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </IntroLetter>
        ))}
      </IntroInner>

      <IntroFade
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.9, delay: letters.length * 0.08 + 0.45 }}
      />
    </IntroOverlay>
  );
};

const HeroTitle = ({ name = "FINO FRANKLIN\nJOHN BOSCO", subtitle = "" }) => {
  const sectionRef = useRef(null);
  const [introDone, setIntroDone] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <HeroTitleContainer>{name}</HeroTitleContainer>;
  }

  return (
    <>
      {!introDone && (
        <HeroIntro name={name} onComplete={() => setIntroDone(true)} />
      )}
      <HeroTitleContent name={name} subtitle={subtitle} sectionRef={sectionRef} introDone={introDone} />
    </>
  );
};

export default HeroTitle;
