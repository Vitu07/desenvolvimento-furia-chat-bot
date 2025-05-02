import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

const List = styled.div`
  flex: 1;
  padding: 0 20px 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: #121212;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #1e1e1e;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #444;
    border-radius: 10px;
    border: 2px solid #1e1e1e;
  }

  scrollbar-color: #444 #1e1e1e;
  scrollbar-width: thin;
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ $sender }) =>
    $sender === "user" ? "flex-end" : "flex-start"};
`;

const MessageBubble = styled.div`
  max-width: 75%;
  margin: 4px 0;
  padding: 14px 18px;
  border-radius: 20px;
  background-color: ${({ $sender }) =>
    $sender === "user" ? "#007bff" : "#2f2f2f"};
  color: ${({ $sender }) => ($sender === "user" ? "#fff" : "#ddd")};
  font-size: 15px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-wrap: break-word;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const BotLabel = styled.div`
  font-size: 0.75rem;
  color: #888;
  margin-bottom: 4px;
  margin-left: 6px;
`;

function AnimatedText({ text, scrollRef, markdown }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    console.log("Texto original:", text);

    let index = 0;
    const interval = setInterval(() => {
      const newText = text.slice(0, index + 1);
      setDisplayedText(newText);
      index++;

      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: "smooth" });
      }

      if (index >= text.length) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, [text, scrollRef]);

  if (!markdown) return <span>{displayedText}</span>;

  return (
    <ReactMarkdown
      remarkPlugins={[remarkBreaks]}
      components={{
        p: ({ node, ...props }) => (
          <p
            style={{
              marginBottom: "12px",
              whiteSpace: "pre-line",
            }}
            {...props}
          />
        ),
        li: ({ node, ...props }) => (
          <li style={{ marginBottom: "6px" }} {...props} />
        ),
        strong: ({ node, ...props }) => (
          <strong style={{ fontWeight: 600 }} {...props} />
        ),
        a: ({ node, ...props }) => (
          <a {...props} target="_blank" rel="noopener noreferrer" />
        ),
      }}
    >
      {displayedText}
    </ReactMarkdown>
  );
}

function MessageList({ messages }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <List>
      {messages.map((msg, index) => (
        <MessageWrapper key={index} $sender={msg.sender}>
          {msg.sender === "bot" && <BotLabel>FURIA Bot</BotLabel>}
          <MessageBubble $sender={msg.sender}>
            {msg.sender === "bot" ? (
              <AnimatedText
                text={msg.text}
                scrollRef={messagesEndRef}
                markdown={true}
              />
            ) : (
              msg.text
            )}
          </MessageBubble>
        </MessageWrapper>
      ))}
      <div ref={messagesEndRef} />
    </List>
  );
}

export default MessageList;
