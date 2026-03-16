import styled from 'styled-components';

export const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin: 40px 0;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

export const ExperienceCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    background: rgba(100, 150, 255, 0.08);
    border-color: rgba(100, 150, 255, 0.3);
    box-shadow: 0 8px 32px rgba(100, 150, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(2px);
  }

  animation: ${(props) => props.isExpanded ? 'slideDown 0.4s ease-out' : 'none'};

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${(props) => props.isExpanded ? '16px' : '0'};
  transition: margin-bottom 0.3s ease;
`;

export const ExperienceTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #e0e7ff;
  margin: 0 0 8px 0;
  letter-spacing: 0.5px;
`;

export const ExperienceCompany = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #c7d2fe;
  margin: 4px 0;
`;

export const ExperienceDuration = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 4px 0;
  font-style: italic;
`;

export const ExperienceLocation = styled.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 4px 0;
`;

export const ExperienceDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
  margin: 16px 0;
  animation: fadeIn 0.4s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const HighlightsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  animation: fadeIn 0.4s ease-out 0.1s both;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const HighlightItem = styled.li`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  padding-left: 16px;
  position: relative;
  line-height: 1.5;

  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: #c7d2fe;
    font-weight: bold;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`;

export const Tag = styled.span`
  background: rgba(100, 150, 255, 0.08);
  color: #c7d2fe;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(100, 150, 255, 0.2);
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    background: rgba(100, 150, 255, 0.15);
    border-color: rgba(100, 150, 255, 0.4);
    box-shadow: 0 0 10px rgba(100, 150, 255, 0.2);
  }
`;
