import { create } from 'zustand';
import { ChatMessage } from '@/types';

interface ChatState {
  messages: ChatMessage[];
  currentUser: {
    id: string;
    username: string;
    avatar?: string;
  };
  addMessage: (message: string) => void;
  setUsername: (username: string) => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [
    {
      id: '1',
      userId: 'system',
      username: 'Brewstop Bot',
      message: 'Welcome to the Brewstop chat! Connect with other beer enthusiasts.',
      timestamp: new Date(Date.now() - 60000),
    },
  ],
  currentUser: {
    id: Math.random().toString(36).substr(2, 9),
    username: `Guest${Math.floor(Math.random() * 1000)}`,
  },
  addMessage: (message) => {
    const { currentUser } = get();
    const newMessage: ChatMessage = {
      id: Math.random().toString(36).substr(2, 9),
      userId: currentUser.id,
      username: currentUser.username,
      message,
      timestamp: new Date(),
      avatar: currentUser.avatar,
    };
    set((state) => ({
      messages: [...state.messages, newMessage],
    }));
  },
  setUsername: (username) =>
    set((state) => ({
      currentUser: { ...state.currentUser, username },
    })),
}));
