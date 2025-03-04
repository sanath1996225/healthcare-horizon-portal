
import { useState } from 'react';
import { MessageSquare, SendHorizontal, X } from 'lucide-react';

type MessageType = {
  type: 'user' | 'bot';
  content: string;
};

const AiChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<MessageType[]>([
    {type: 'bot', content: 'Hello! I\'m RevenueCare AI assistant. How can I help you with revenue cycle management today?'}
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: MessageType = {type: 'user', content: inputValue};
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue('');

    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      const botResponse: MessageType = {
        type: 'bot', 
        content: 'Thanks for your message. Our AI is analyzing your question and will provide a detailed response soon. In a real implementation, this would connect to OpenAI API or a similar service.'
      };
      setMessages([...updatedMessages, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Chatbot button */}
      <button 
        onClick={toggleChatbot}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors z-50"
        aria-label="Open AI assistant"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chatbot window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-96 bg-white rounded-xl shadow-intense flex flex-col overflow-hidden z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <MessageSquare size={20} className="mr-2" />
              <h3 className="font-medium">RevenueCare AI Assistant</h3>
            </div>
            <button onClick={toggleChatbot} className="text-white hover:text-blue-200">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`mb-4 max-w-[80%] ${
                  message.type === 'user' ? 'ml-auto bg-blue-600 text-white' : 'mr-auto bg-white text-navy-800'
                } rounded-xl p-3 shadow-sm ${
                  message.type === 'user' ? '' : 'border border-gray-200'
                }`}
              >
                {message.content}
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 flex">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
              disabled={!inputValue.trim()}
            >
              <SendHorizontal size={20} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AiChatbot;
