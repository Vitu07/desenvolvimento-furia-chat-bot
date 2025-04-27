import React from "react";
import styled from "styled-components";

const About = styled.section`
  padding: 80px 20px;
  text-align: center;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  color: #333;
`;

function AboutSection() {
  return (
    <About>
      <Title>Sobre o Projeto</Title>
      <Text>
        Esta plataforma foi criada para facilitar a interação entre os fãs e o
        time de CS da FURIA. Nosso chatbot é treinado para responder perguntas
        frequentes sobre o time, jogadores, competições e muito mais.
        Experimente o chat e descubra todas as novidades!
      </Text>
    </About>
  );
}

export default AboutSection;
