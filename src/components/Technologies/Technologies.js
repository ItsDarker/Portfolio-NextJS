import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { SiKalilinux, SiWindows, SiSelenium, SiUipath } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in web development, security testing, and process automation.
      From Back-end Development to RPA Solutions.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <SiKalilinux size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Security Tools</ListTitle>
          <ListParagraph>
            Experience with <br />
            Metasploit, Nmap, <br />
            Wireshark & More
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js and Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiWindows size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Operating Systems</ListTitle>
          <ListParagraph>
            Proficient in <br />
            Windows and Linux
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiSelenium size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Automation</ListTitle>
          <ListParagraph>
            Experience with <br />
            Selenium Python, UiPath, <br />
            and RPA Solutions
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);


export default Technologies;
