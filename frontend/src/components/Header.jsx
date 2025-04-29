import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  padding: 15px 30px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.7);
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
