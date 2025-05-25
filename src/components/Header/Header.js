import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';
import NavDropDown from '../NavDropDown';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef(null);
  
  // This ensures the dropdown only renders on the client side
  useEffect(() => {
    setIsMounted(true);
    
    // Add click event listener to close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <Container>
      <Div1>
        <Link href="/" style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </Link>
      </Div1>
      <Div2>
        <li style={{ listStyleType: 'none' }}>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li style={{ listStyleType: 'none' }}>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li style={{ listStyleType: 'none' }}>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li style={{ listStyleType: 'none' }}>
          <div ref={dropdownRef} style={{ position: 'relative' }}>
            <NavLink onClick={() => setIsOpen(!isOpen)}>Contact</NavLink>
            {isMounted && <NavDropDown isOpen={isOpen} />}
          </div>
        </li>
      </Div2>
      <Div3>
        <SocialIcons
          href="https://github.com/ItsDarker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.linkedin.com/in/fino-franklin-john-bosco-9bb565215"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
