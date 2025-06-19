'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useChatStore } from '@/store/chatStore';

export default function ChatInput() {
  const [message, setMessage] = useState('');
  const { addMessage } = useChatStore();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      addMessage(message.trim());
      setMessage('');

      // Simulate other users responding occasionally
      if (Math.random() > 0.7) {
        setTimeout(
          () => {
            const responses = [
              "That's a great choice! I love that beer too.",
              'Has anyone tried the new seasonal brew?',
              'The atmosphere here is amazing tonight!',
              "I'm working my way through the tasting flight.",
              'The pretzel bites are incredible with the IPA!',
            ];
            const botMessage = responses[Math.floor(Math.random() * responses.length)];
            const botUser = {
              id: 'bot-' + Math.random().toString(36).substr(2, 9),
              userId: 'bot',
              username: `BeerLover${Math.floor(Math.random() * 100)}`,
              message: botMessage,
              timestamp: new Date(),
            };
            useChatStore.setState((state) => ({
              messages: [...state.messages, botUser],
            }));
          },
          2000 + Math.random() * 3000
        );
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t">
      <div className="flex space-x-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <motion.button
          type="submit"
          disabled={!message.trim()}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
            message.trim()
              ? 'bg-primary text-white hover:bg-red-700'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
          whileTap={message.trim() ? { scale: 0.95 } : {}}
        >
          Send
        </motion.button>
      </div>
    </form>
  );
}
