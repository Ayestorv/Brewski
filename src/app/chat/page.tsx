'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useChatStore } from '@/store/chatStore';
import ChatMessage from '@/components/chat/ChatMessage';
import ChatInput from '@/components/chat/ChatInput';

export default function ChatPage() {
  const { messages, currentUser, setUsername } = useChatStore();
  const [showUsernameModal, setShowUsernameModal] = useState(true);
  const [tempUsername, setTempUsername] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSetUsername = () => {
    if (tempUsername.trim()) {
      setUsername(tempUsername.trim());
      setShowUsernameModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white flex flex-col">
      {showUsernameModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-6 max-w-md w-full"
          >
            <h2 className="text-2xl font-bold mb-4">Welcome to Brewstop Chat!</h2>
            <p className="text-gray-600 mb-4">Choose a username to get started:</p>
            <input
              type="text"
              value={tempUsername}
              onChange={(e) => setTempUsername(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSetUsername()}
              placeholder="Enter your username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-4"
              autoFocus
            />
            <button
              onClick={handleSetUsername}
              disabled={!tempUsername.trim()}
              className={`w-full py-2 rounded-lg font-semibold transition-all duration-200 ${
                tempUsername.trim()
                  ? 'bg-primary text-white hover:bg-red-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Join Chat
            </button>
          </motion.div>
        </div>
      )}

      <div className="flex-1 container mx-auto px-4 py-8 flex flex-col max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Brewstop Chat</h1>
          <p className="text-gray-600">
            Connected as: <span className="font-semibold">{currentUser.username}</span>
          </p>
        </motion.div>

        <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <ChatMessage
                key={message.id}
                message={message}
                isOwn={message.userId === currentUser.id}
                delay={index * 0.05}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>

          <ChatInput />
        </div>
      </div>
    </div>
  );
}
