import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer, BuiltWithContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+13122856729">312-2856 729</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:finofranklin@gmail.com">
            finofranklin@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
          
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons
            href="https://github.com/ItsDarker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://instagram.com/fino_franklin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
      <BuiltWithContainer>
            <img src="/vercel.svg" alt="Next.js Logo" style={{ height: '24px', marginRight: '8px', filter: 'invert(1) brightness(2)' }} />
            <span style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)' }}>Built with Next.js</span>
          </BuiltWithContainer>
    </FooterWrapper>
  );
};

export default Footer;
