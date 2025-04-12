import { useState,useEffect } from "react";
import "./Bot.css";
import botIcon from "../../public/assets/juan.webp";

function Bot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [showSpeech, setShowSpeech] = useState(true);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Meow! I'm Juan, a friendly cat bot. Ready to help you get to know my awesome human!" },
  ]);
  const [input, setInput] = useState("");
  const [fadeOut, setFadeOut] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const botMessage = {
        sender: "bot",
        text: `Meow!`,       
        //text: `Meow!: "${userMessage.text}"`,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpeech(false);
      setFadeOut(true);
    }, 10000);
  
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
        <div className={`bot__container ${isMinimized ? "minimized" : ""}`}>
          <div className="bot-header">
            <span className="bot-title">Juan</span>
            <div className="bot-controls">
              <button onClick={() => setIsMinimized((prev) => !prev)}>
                {isMinimized ? "🔼" : "🔽"}
              </button>
              <button onClick={() => setIsOpen(false)}>✖️</button>
            </div>
          </div>

          {!isMinimized && (
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
                />
                <button onClick={handleSend}>Send</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Bot;
