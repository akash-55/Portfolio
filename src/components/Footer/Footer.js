import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contact</LinkTitle>
          <LinkItem href='mailto: akash.20444@gmail.com'>akash.20444@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
      <h4>© copyright 2022</h4>
        <SocialContainer>
        <SocialIcons href="https://github.com/akash-55">
         <AiFillGithub size="3rem"></AiFillGithub>
       </SocialIcons>
       <SocialIcons href="https://linkdin.com/akash-sharma-8152711a7/">
         <AiFillLinkedin size="3rem"></AiFillLinkedin>
       </SocialIcons>
       <SocialIcons href="https://twitter.com/Akashhdev">
         <AiFillTwitterCircle size="3rem"></AiFillTwitterCircle>
       </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
      
    </FooterWrapper>
  );
};

export default Footer;
