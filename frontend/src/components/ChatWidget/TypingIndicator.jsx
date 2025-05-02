import React from "react";
import styled from "styled-components";

const Typing = styled.div`
  padding: 8px 20px;
  font-size: 13px;
  color: #bbb;
  text-align: left;
`;

function TypingIndicator() {
  return <Typing>FURIA está digitando...</Typing>;
}

export default TypingIndicator;
