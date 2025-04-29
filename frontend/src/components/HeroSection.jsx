import React, { useState } from "react";
import styled from "styled-components";

const Hero = styled.section`
  background: none;
  color: white;
  text-align: center;
  padding: 120px 20px 0;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 15px;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 1.8rem;
  margin-bottom: 30px;
  font-weight: 400;
`;

const CTAButton = styled.button`
  padding: 15px 40px;
  background-color: #007bff;
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  text-decoration: none;
  transition: 0.3s;
  display: inline-block;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;

const AboutSection = styled.section`
  padding: 100px 20px;
  text-align: center;
  background: #fafafa;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  margin-top: 50px;
  transform: translateY(100px);
  opacity: 0;
  transition: transform 0.5s ease, opacity 0.5s ease;

  &.show {
    transform: translateY(0);
    opacity: 1;
  }
`;

const TitleAbout = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: 700;
  color: #363636;
`;

const Text = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  color: #555;
  line-height: 1.6;
`;

function HeroSection() {
  const [showAbout, setShowAbout] = useState(false);

  const handleButtonClick = () => {
    setShowAbout(!showAbout);
  };

  return (
    <Hero>
      <Title>Bem-vindo ao Chat do Time de CS da FURIA</Title>
      <Subtitle>Converse com a gente e tire suas dúvidas!</Subtitle>
      <CTAButton onClick={handleButtonClick}>
        {showAbout ? "Fechar Sobre o Projeto" : "Sobre o Projeto"}
      </CTAButton>

      <AboutSection className={showAbout ? "show" : ""}>
        <TitleAbout>Sobre o Projeto</TitleAbout>
        <Text>
          Esta plataforma foi criada para facilitar a interação entre os fãs e o
          time de CS da FURIA. Nosso chatbot é treinado para responder perguntas
          frequentes sobre o time, jogadores, competições e muito mais.
          Experimente o chat e descubra todas as novidades!
        </Text>
      </AboutSection>
    </Hero>
  );
}

export default HeroSection;
