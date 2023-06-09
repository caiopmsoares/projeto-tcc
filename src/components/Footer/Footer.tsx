import React from "react";
import { FooterContainer, LogoWrapper, Logo, Text } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Text>
        A fictional project made by{" "}
        <a href="https://www.linkedin.com/in/michelleimiller/">
          {" "}
          Michelle Miller
        </a>{" "}
        &amp;
        <a href="https://www.linkedin.com/in/macaio/"> Caio Macedo</a>
      </Text>
    </FooterContainer>
  );
};

export default Footer;
