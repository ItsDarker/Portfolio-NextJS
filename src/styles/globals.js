import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  /* CYBER/MATRIX THEME - COMMENTED OUT */
  /*
  @keyframes glow {
    0%, 100% {
      text-shadow: 0 0 8px rgba(0, 255, 136, 0.5);
    }
    50% {
      text-shadow: 0 0 16px rgba(0, 255, 136, 0.8);
    }
  }

  @keyframes codeFlow {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
  */

  /* GLASSMORPHISM THEME 🔵 */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes slideInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: linear-gradient(135deg, #0a0e27 0%, #151932 50%, #1a1f3a 100%);
    background-attachment: fixed;
    color: ${props => props.theme.colors.primary1};
    cursor: default;
    position: relative;
    overflow-x: hidden;

    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background:
        radial-gradient(circle at 20% 50%, rgba(100, 150, 255, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(150, 100, 255, 0.05) 0%, transparent 50%);
      pointer-events: none;
      z-index: -1;
    }
  }

  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }

  a {
    text-decoration: none;
    transition: all 0.3s ease;
  }

  li{
    list-style: none;
  }

  ::selection {
    background-color: rgba(100, 150, 255, 0.3);
    color: #6496ff;
  }

  ::-webkit-scrollbar {
    width: 12px;
    background: transparent;
  }

  ::-webkit-scrollbar-track {
    background: rgba(100, 150, 255, 0.05);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, rgba(100, 150, 255, 0.6), rgba(150, 100, 255, 0.6));
    border-radius: 6px;
    border: 2px solid rgba(15, 22, 36, 0.8);

    &:hover {
      background: linear-gradient(180deg, rgba(100, 150, 255, 0.8), rgba(150, 100, 255, 0.8));
      box-shadow: 0 0 12px rgba(100, 150, 255, 0.4);
    }
  }
`;

export default GlobalStyles;