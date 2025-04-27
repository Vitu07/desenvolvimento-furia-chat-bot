import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px 40px;
  background-color: #000;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo
        src="https://cdn.pandascore.co/images/team/image/124530/8297.png"
        alt="FURIA Logo"
      />
    </HeaderContainer>
  );
}

export default Header;
