import React, { useState } from "react";
import styled from "styled-components";

const InputContainer = styled.form`
  display: flex;
  padding: 16px;
  border-top: 1px solid #444;
  background-color: #1e1e1e;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  background-color: #2a2a2a;
  color: #f0f0f0;
  font-size: 16px;
  padding: 12px 16px;
  border-radius: 30px;
  outline: none;

  &::placeholder {
    color: #aaa;
  }
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  margin-left: 10px;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;

function MessageInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSend(text);
      setText("");
    }
  };

  return (
    <InputContainer onSubmit={handleSubmit}>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite sua mensagem..."
      />
      <Button type="submit">Enviar</Button>
    </InputContainer>
  );
}

export default MessageInput;
