import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroTitleContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
`;

export const IntroOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 100;
  background: #000;
  display: grid;
  place-items: center;
  overflow: hidden;
`;

export const IntroInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.02em;
  padding: 0 24px;
  text-align: center;
`;

export const IntroLetter = styled(motion.span)`
  font-size: clamp(3rem, 12vw, 10rem);
  font-weight: 800;
  line-height: 0.9;
  color: white;
  letter-spacing: -0.06em;
  font-family: 'Space Grotesk', sans-serif;
`;

export const IntroFade = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: #000;
  pointer-events: none;
`;

export const HeroSection = styled.section`
  position: relative;
  min-height: 220vh;
  background: linear-gradient(135deg, #0a0e27 0%, #151932 50%, #1a1f3a 100%);
  background-attachment: fixed;
`;

export const HeroSticky = styled(motion.div)`
  position: sticky;
  top: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
  text-align: center;
  background: linear-gradient(135deg, #0a0e27 0%, #151932 50%, #1a1f3a 100%);
  background-attachment: fixed;
`;

export const HeroName = styled.h1`
  margin: 0;
  font-size: clamp(3.5rem, 14vw, 12rem);
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.08em;
  font-family: 'Space Grotesk', sans-serif;
  color: white;
`;

export const ShimmerText = styled(HeroName)`
  background: linear-gradient(
    110deg,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0.25) 40%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0.25) 60%,
    rgba(255, 255, 255, 0.25) 100%
  );
  background-size: 220% 100%;
  background-position: 200% 0;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmerSweep 4.5s linear infinite;

  @keyframes shimmerSweep {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -20% 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    color: white;
    background: none;
    -webkit-text-fill-color: white;
  }
`;
