import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';
import { useStore } from '../store/useStore';

export const Chat = () => {
  const [input, setInput] = useState('');
  const { chatMessages, addChatMessage } = useStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    addChatMessage({
      id: Math.random().toString(36).substr(2, 9),
      role: 'user',
      content: input,
      timestamp: new Date().toISOString(),
    });

    // Simulate AI response (in real app, this would call your backend)
    setTimeout(() => {
      addChatMessage({
        id: Math.random().toString(36).substr(2, 9),
        role: 'assistant',
        content: 'This is a simulated response. In a real application, this would be powered by your RAG agent.',
        timestamp: new Date().toISOString(),
      });
    }, 1000);

    setInput('');
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-gray-50">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatMessages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start space-x-3 ${
              message.role === 'assistant' ? 'justify-start' : 'justify-end'
            }`}
          >
            {message.role === 'assistant' && (
              <div className="flex-shrink-0">
                <Bot className="h-8 w-8 text-indigo-600" />
              </div>
            )}
            <div
              className={`rounded-lg px-4 py-2 max-w-[70%] ${
                message.role === 'assistant'
                  ? 'bg-white text-gray-900'
                  : 'bg-indigo-600 text-white'
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <p className="text-xs mt-1 opacity-70">
                {new Date(message.timestamp).toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="p-4 bg-white border-t">
        <div className="flex space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question about your documents..."
            className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Send className="h-4 w-4 mr-2" />
            Send
          </button>
        </div>
      </form>
    </div>
  );
};