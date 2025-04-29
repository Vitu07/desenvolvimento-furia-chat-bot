import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ChatButton from "./ChatButton";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import TypingIndicator from "./TypingIndicator";

const ChatWidgetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 90px;
  right: 20px;
  width: 400px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow: hidden;
  transition: height 0.4s ease, opacity 0.4s ease;
  height: ${(props) => (props.isOpen ? `${props.dynamicHeight}px` : "0px")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
`;

const MessagesWrapper = styled.div`
  flex-grow: 1;
  padding: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ChatButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 2000;
`;

const ChatWidget = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatVisible, setChatVisible] = useState(false);
  const [dynamicHeight, setDynamicHeight] = useState(100);

  const maxHeight = 500;

  const sendMessage = async (message) => {
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5005/webhooks/rest/webhook",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sender: "user",
            message: message,
          }),
        }
      );

      const data = await response.json();

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: "user" },
        { text: data[0].text, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = (message) => {
    sendMessage(message);
    setInputMessage("");
  };

  useEffect(() => {
    const baseHeight = 100; 
    const messageHeight = 70;
    const newHeight = baseHeight + messages.length * messageHeight;

    if (newHeight < maxHeight) {
      setDynamicHeight(newHeight);
    } else {
      setDynamicHeight(maxHeight);
    }
  }, [messages]);

  return (
    <div>
      <ChatButtonWrapper>
        <ChatButton onClick={() => setChatVisible(!chatVisible)} />
      </ChatButtonWrapper>

      <ChatWidgetWrapper isOpen={chatVisible} dynamicHeight={dynamicHeight}>
        <MessagesWrapper>
          <MessageList messages={messages} />
          {loading && <TypingIndicator />}
        </MessagesWrapper>
        <MessageInput onSend={handleSend} />
      </ChatWidgetWrapper>
    </div>
  );
};

export default ChatWidget;
