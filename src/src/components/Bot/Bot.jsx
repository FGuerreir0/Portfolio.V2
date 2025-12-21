import { useState, useEffect, useCallback } from "react";
import "./Bot.css";
import botIcon from "../../public/assets/juan.webp";
import { BOT_MESSAGES, ANIMATION_CONFIG } from "../../config/constants";

function Bot() {
  const [isOpen, setIsOpen] = useState(false);

  const [showSpeech, setShowSpeech] = useState(true);
  const [messages, setMessages] = useState([
    { sender: "bot", text: BOT_MESSAGES.greeting },
  ]);
  const [input, setInput] = useState("");
  const [fadeOut, setFadeOut] = useState(false);

  const handleSend = useCallback(() => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const botMessage = {
        sender: "bot",
        text: BOT_MESSAGES.fallback(userMessage.text),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, ANIMATION_CONFIG.botSpeech.responseDelay);
  }, [input]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  }, [handleSend]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpeech(false);
      setFadeOut(true);
    }, ANIMATION_CONFIG.botSpeech.displayTime);
  
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bot-wrapper">
      {!isOpen && (
        <div className="bot-launcher">
          {showSpeech && (
            <div className={`bot-speech-bubble ${fadeOut ? "fade-out" : ""}`}>
              Meow! Want to know more about my awesome human?
            </div>
          )}
          <img
            src={botIcon}
            title="Meow!"
            alt="Chat Bot"
            className="bot-icon"
            onClick={() => setIsOpen(true)}
          />
        </div>
      )}

      {isOpen && (
        <div className={`bot__container`}>
          <div className="bot-header">
            <span className="bot-title">Juan</span>
            <div className="bot-controls">
              <button onClick={() => setIsOpen(false)}>✖️</button>
            </div>
          </div>


            <>
              <div className="chat-box">
                {messages.map((msg, index) => (
                  <div key={index} className={`message ${msg.sender}`}>
                    <div className="message-content">{msg.text}</div>
                  </div>
                ))}
              </div>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  aria-label="Chat message input"
                />
                <button onClick={handleSend} aria-label="Send message">Send</button>
              </div>
            </>
  
        </div>
      )}
    </div>
  );
}

export default Bot;
