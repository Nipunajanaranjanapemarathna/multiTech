import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm ElixirBot, your tropical wellness assistant. How can I help you discover the perfect ElixirX for your vitality journey?",
      sender: 'bot'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user'
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thanks for your question! I'd love to help you learn more about ElixirX. Our premium coconut elixir is crafted with the finest Sri Lankan ingredients. Would you like to know about our ingredients, benefits, or place an order?",
        sender: 'bot'
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 left-6 w-16 h-16 bg-gradient-to-r from-lime-400 to-yellow-400 text-black rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-40 flex items-center justify-center border-4 border-white/20"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 w-96 h-96 bg-gradient-to-br from-green-900/95 to-black/95 backdrop-blur-lg rounded-3xl border border-lime-400/30 shadow-2xl z-50 flex flex-col">
          <div className="p-6 border-b border-white/20">
            <h3 className="text-lime-400 font-serif text-xl">ElixirBot</h3>
            <p className="text-white/60 text-sm">Your tropical wellness assistant</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-lime-400 to-yellow-400 text-black'
                      : 'bg-white/10 text-white border border-white/20'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-white/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about ElixirX..."
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-lime-400/50"
              />
              <button
                onClick={sendMessage}
                className="w-10 h-10 bg-gradient-to-r from-lime-400 to-yellow-400 text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;