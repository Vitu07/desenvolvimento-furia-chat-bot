import React, { useState } from "react";
import styled from "styled-components";

const InputContainer = styled.form`
  display: flex;
  padding: 10px;
  border-top: 1px solid #ccc;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  background: black;
  color: white;
  border: none;
  padding: 0 20px;
  font-size: 16px;
  cursor: pointer;
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
