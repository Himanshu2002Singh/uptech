import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = () => {
    if (message.trim()) {
      const whatsappUrl = `https://wa.me/7303050391?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setMessage('');
      setIsOpen(false);
    }
  };

  const quickMessages = [
    "I'm interested in your courses",
    "Can you provide more information?",
    "I need help with course selection",
    "What are your training schedules?"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-green-500 font-bold text-sm">Uptech </span>
              </div>
              <div>
                <h4 className="font-semibold">  Uptech Automations</h4>
                <p className="text-xs opacity-90">Typically replies instantly</p>
              </div>
            </div>
            <button onClick={toggleChat} className="hover:bg-green-600 rounded-full p-1 transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 max-h-96 overflow-y-auto">
            <div className="mb-4">
              <div className="bg-gray-100 rounded-lg p-3 mb-2">
                <p className="text-sm text-gray-800">
                  Hi there! 👋 How can we help you today?
                </p>
              </div>
            </div>

            {/* Quick Messages */}
            <div className="space-y-2 mb-4">
              <p className="text-xs text-gray-500 font-medium">Quick messages:</p>
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => setMessage(msg)}
                  className="block w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {msg}
                </button>
              ))}
            </div>

            {/* Message Input */}
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={toggleChat}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 animate-bounce"
        style={{ animationDuration: '2s', animationIterationCount: 'infinite' }}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Floating Badge */}
      <div className="absolute -top-2 -left-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-pulse">
        1
      </div>
    </div>
  );
};

export default WhatsAppChat;