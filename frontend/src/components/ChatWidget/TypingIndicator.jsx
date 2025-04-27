import React from "react";
import styled from "styled-components";

const Typing = styled.div`
  padding: 5px 10px;
  font-size: 12px;
  color: gray;
`;

function TypingIndicator() {
  return <Typing>FURIA está digitando...</Typing>;
}

export default TypingIndicator;
