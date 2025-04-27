import React from "react";
import styled from "styled-components";

const Hero = styled.section`
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 100px 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
`;

const CTAButton = styled.a`
  padding: 15px 30px;
  background-color: #fff;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  border-radius: 30px;
  transition: 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;

function HeroSection() {
  return (
    <Hero>
      <Title>Bem-vindo ao Chat do Time de CS da FURIA</Title>
      <Subtitle>Converse com a gente e tire suas dúvidas!</Subtitle>
      <CTAButton href="#chat">Falar com o Bot</CTAButton>
    </Hero>
  );
}

export default HeroSection;
