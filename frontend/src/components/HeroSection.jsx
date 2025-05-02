import React, { useState } from "react";
import styled from "styled-components";
import MessageList from "./ChatWidget/MessageList";
import MessageInput from "./ChatWidget/MessageInput";
import TypingIndicator from "./ChatWidget/TypingIndicator";
import botAvatar from "../assets/img/mascote_furia.jpg";

const Hero = styled.section`
  background: none;
  color: white;
  text-align: center;
  padding: 120px 20px 80px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 15px;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 1.8rem;
  margin-bottom: 30px;
  font-weight: 400;
`;

const CTAButton = styled.button`
  padding: 15px 40px;
  background-color: #007bff;
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;

const ChatContainer = styled.div`
  margin: 40px auto 0;
  max-width: 500px;
  width: 100%;
  background-color: #121212;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.show {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: #222;
  color: #fff;
  padding: 12px 20px;
  border-bottom: 1px solid #444;
`;

const BotAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

const BotInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const BotName = styled.span`
  font-weight: bold;
`;

const BotStatus = styled.span`
  font-size: 0.85rem;
  color: #4caf50;
`;

const MessagesWrapper = styled.div`
  max-height: 300px;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #444;
    border-radius: 10px;
    border: 2px solid #1e1e1e;
  }

  scrollbar-color: #444 #1e1e1e;
  scrollbar-width: thin;
`;

function HeroSection() {
  const [chatVisible, setChatVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

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

      const botMessages = [
        {
          text: data.map((msg) => msg.text).join("\n\n"),
          sender: "bot",
        },
      ];

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: "user" },
        ...botMessages,
      ]);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = (message) => {
    sendMessage(message);
  };

  return (
    <Hero>
      <Title>Bem-vindo ao Chat do Time de CS da FURIA</Title>
      <Subtitle>Converse com a gente e tire suas dúvidas!</Subtitle>
      <CTAButton onClick={() => setChatVisible(true)}>Comece Agora</CTAButton>

      <ChatContainer className={chatVisible ? "show" : ""}>
        <ChatHeader>
          <BotAvatar src={botAvatar} alt="Bot Avatar" />
          <BotInfo>
            <BotName>FURIA Bot</BotName>
            <BotStatus>{loading ? "● Digitando..." : "● Online"}</BotStatus>
          </BotInfo>
        </ChatHeader>

        <MessagesWrapper>
          <MessageList messages={messages} />
          {loading && <TypingIndicator />}
        </MessagesWrapper>

        <MessageInput onSend={handleSend} />
      </ChatContainer>
    </Hero>
  );
}

export default HeroSection;
