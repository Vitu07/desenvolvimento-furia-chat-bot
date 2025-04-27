import React, { useState } from "react";
import styled from "styled-components";
import MessageList from "./MessageList";
import TypingIndicator from "./TypingIndicator";
import MessageInput from "./MessageInput";

const Window = styled.div`
  position: fixed;
  bottom: 90px;
  right: 20px;
  width: 320px;
  max-height: 500px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

function ChatWindow({ messages, onSendMessage, isTyping }) {
  return (
    <Window>
      <MessageList messages={messages} />
      {isTyping && <TypingIndicator />}
      <MessageInput onSend={onSendMessage} />
    </Window>
  );
}

export default ChatWindow;
