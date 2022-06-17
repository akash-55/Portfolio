import Link from 'next/Link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTaobaoCircle, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCodeigniter } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: "flex", alignItem: "centre", color: "white", marginBottom: "20px" }}>
          <DiCodeigniter size="2rem"></DiCodeigniter> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Techologies</NavLink>
        </Link>
      </li>

      {/* <li>
     <Link href='#about'>
         <NavLink>About</NavLink>
       </Link>
     </li> */}
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/akash-55">
        <AiFillGithub size="3rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons href="https://linkdin.com">
        <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </SocialIcons>
      <SocialIcons href="https://twitter.com">
        <AiFillTwitterCircle size="3rem"></AiFillTwitterCircle>
      </SocialIcons>
    </Div3>
  </Container>

);

export default Header;
