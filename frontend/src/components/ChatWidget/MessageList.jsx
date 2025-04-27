import ReactMarkdown from "react-markdown";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

// Container para a lista de mensagens
const List = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

// Estilo para as mensagens, diferenciando entre bot e usuário
const Message = styled.div`
  max-width: 60%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  word-wrap: break-word;
  align-self: ${({ sender }) =>
    sender === "user" ? "flex-end" : "flex-start"};
  background-color: ${({ sender }) =>
    sender === "user" ? "#007bff" : "#e0e0e0"};
  color: ${({ sender }) => (sender === "user" ? "#fff" : "#000")};
`;

function MessageList({ messages }) {
  const messagesEndRef = useRef(null);

  // Faz a rolagem automática quando a lista de mensagens é atualizada
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <List>
      {messages.map((msg, index) => (
        <Message key={index} sender={msg.sender}>
          {msg.sender === "bot" ? (
            <ReactMarkdown>{msg.text}</ReactMarkdown>
          ) : (
            msg.text
          )}
        </Message>
      ))}
      <div ref={messagesEndRef} />{" "}
    </List>
  );
}

export default MessageList;
