'use client';

import { motion } from 'framer-motion';
import { ChatMessage as ChatMessageType } from '@/types';

interface ChatMessageProps {
  message: ChatMessageType;
  isOwn: boolean;
  delay?: number;
}

export default function ChatMessage({ message, isOwn, delay = 0 }: ChatMessageProps) {
  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`max-w-[70%] ${isOwn ? 'order-2' : 'order-1'}`}>
        <div className="flex items-end space-x-2">
          {!isOwn && (
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-primary">
                {message.username.charAt(0).toUpperCase()}
              </span>
            </div>
          )}

          <div>
            {!isOwn && <p className="text-xs text-gray-600 mb-1 ml-1">{message.username}</p>}
            <div
              className={`rounded-2xl px-4 py-2 ${
                isOwn
                  ? 'bg-primary text-white rounded-br-none'
                  : 'bg-gray-100 text-gray-900 rounded-bl-none'
              }`}
            >
              <p className="break-words">{message.message}</p>
            </div>
            <p className={`text-xs text-gray-500 mt-1 ${isOwn ? 'text-right' : 'text-left'}`}>
              {formatTime(message.timestamp)}
            </p>
          </div>

          {isOwn && (
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-white">
                {message.username.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
