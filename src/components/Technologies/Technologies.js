import React from 'react';
import { DiReact, DiPython, DiDatabase } from 'react-icons/di';
import { SiKalilinux, SiWindows } from 'react-icons/si';
import { BiLock, BiShield } from 'react-icons/bi';
import { AiOutlineApi, AiOutlineAntDesign } from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionTitle>Technologies & Skills</SectionTitle>
    <SectionText>
      Expertise in cybersecurity infrastructure, cloud security, penetration testing, and secure development.
      Proficient across security tools, cloud platforms, and full-stack development.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <BiLock size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Security & IAM</ListTitle>
          <ListParagraph>
            Active Directory, RBAC, <br />
            MFA, Zero Trust, <br />
            NIST Framework
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <BiShield size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Penetration Testing</ListTitle>
          <ListParagraph>
            Burp Suite, Metasploit, <br />
            Nmap, Wireshark, <br />
            Kali Linux
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiKalilinux size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>SIEM & Monitoring</ListTitle>
          <ListParagraph>
            Wazuh SIEM, Splunk, <br />
            Log Analysis, Threat <br />
            Detection, EDR
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <AiOutlineApi size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Cloud Security</ListTitle>
          <ListParagraph>
            GCP IAM, AWS Security, <br />
            CloudTrail, Security <br />
            Hub, DevSecOps
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End Development</ListTitle>
          <ListParagraph>
            React.js, Next.js, <br />
            JavaScript, TypeScript, <br />
            Styled-Components
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Backend & Automation</ListTitle>
          <ListParagraph>
            Python, Bash, PowerShell, <br />
            REST APIs, Machine <br />
            Learning, Automation
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDatabase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            MySQL, PostgreSQL, <br />
            SQLite, Neo4j, <br />
            Firebase
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
            Linux, Windows, <br />
            Kali Linux, System <br />
            Administration
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider divider />
  </Section>
);


export default Technologies;
