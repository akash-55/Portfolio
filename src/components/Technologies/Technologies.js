import React from 'react';
import { DiFirebase, DiReact, DiJava } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText> I am a web developer and I am used to using different technologies as per the project needs</SectionText>
    <List>
    <ListItem>
        <picture>
          <DiJava size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Language</ListTitle>
          <ListParagraph>
            Experience with <br />
            object-oriented languages like java and javascript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
     
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
