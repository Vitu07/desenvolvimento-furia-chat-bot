import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #000;
  color: #bbb;
  text-align: center;
  padding: 20px 10px;
  font-size: 0.9rem;
  border-top: 1px solid #333;
`;

function Footer() {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} FURIA Esports. Todos os direitos reservados.
    </FooterContainer>
  );
}

export default Footer;
