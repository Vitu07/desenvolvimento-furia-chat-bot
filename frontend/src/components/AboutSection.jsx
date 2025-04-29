import React from "react";
import styled from "styled-components";

const About = styled.section`
  padding: 100px 20px;
  text-align: center;
  background: #fafafa;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  margin-top: 50px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: 700;
`;

const Text = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  color: #555;
  line-height: 1.6;
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
