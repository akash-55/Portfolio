import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
  <LeftSection>
  <SectionTitle main centre>
    Hi, <br></br> I'm Akash
  </SectionTitle>
  <SectionText>I'm a React developer. I have expertise in react and Next JSIM also very experienced in Java and four back and I use Mongo DB and SQL and note JS</SectionText>
  <Button onClick ={() =>window.location= "https://github.com/akash-55"}>Learn More </Button>
  </LeftSection>
  </Section>
  
);

export default Hero;