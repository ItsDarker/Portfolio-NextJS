import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
  transition: transform 0.4s ease;

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 180px;
  }
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    padding: 2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    gap: 1.5rem;
    width: 100%;
  }
`;

export const BlogCard = styled.div`
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px) brightness(1.1);
  -webkit-backdrop-filter: blur(10px) brightness(1.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  text-align: center;
  width: 100%;
  max-width: 400px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  box-shadow: ${(props) =>
    props.featured
      ? '0 8px 32px rgba(100, 150, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
      : '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.6s ease;
    pointer-events: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(100, 150, 255, 0.4);
    box-shadow: 0 20px 40px rgba(100, 150, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2);
    transform: translateY(-8px);

    ${Img} {
      transform: scale(1.05);
    }

    &::before {
      left: 100%;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 320px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  padding: 1rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #e0e7ff;
  padding: 0.5rem 0;
  font-size: 1.4rem;
  margin: 0;
`;

export const Hr = styled.hr`
  width: 60px;
  height: 2px;
  margin: 12px auto;
  border: 0;
  background: linear-gradient(90deg, transparent, rgba(100, 150, 255, 0.6), transparent);
  box-shadow: 0 0 8px rgba(100, 150, 255, 0.2);
`;

export const Intro = styled.div`
  width: 100%;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 20px;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.95rem;
  line-height: 1.6;
  text-align: justify;
  margin: 12px 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 15px;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;
  padding-bottom: 1.5rem;
`;

export const ExternalLinks = styled.a`
  color: #c7d2fe;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.7rem 1.2rem;
  background: rgba(100, 150, 255, 0.1);
  border: 1px solid rgba(100, 150, 255, 0.3);
  border-radius: 20px;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  backdrop-filter: blur(5px);

  &:hover {
    background: rgba(100, 150, 255, 0.2);
    border-color: rgba(100, 150, 255, 0.6);
    color: #e0e7ff;
    box-shadow: 0 0 15px rgba(100, 150, 255, 0.3);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  padding: 0 1rem 1rem 1rem;
  list-style: none;
  margin: 0;
`;

export const Tag = styled.li`
  color: #c7d2fe;
  font-size: 0.8rem;
  padding: 4px 12px;
  background: rgba(100, 150, 255, 0.08);
  border: 1px solid rgba(100, 150, 255, 0.2);
  border-radius: 15px;
  font-weight: 500;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    background: rgba(100, 150, 255, 0.15);
    border-color: rgba(100, 150, 255, 0.4);
    box-shadow: 0 0 10px rgba(100, 150, 255, 0.2);
  }
`;