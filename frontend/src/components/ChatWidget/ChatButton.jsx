import React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #363636;
  color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  border: none;
  font-size: 30px;
  cursor: pointer;
`;

function ChatButton({ onClick }) {
  return <Button onClick={onClick}>💬</Button>;
}

export default ChatButton;
