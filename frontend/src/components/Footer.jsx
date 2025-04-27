import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 20px 10px;
  font-size: 0.9rem;
`;

function Footer() {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} FURIA Esports. Todos os direitos reservados.
    </FooterContainer>
  );
}

export default Footer;
