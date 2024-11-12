import { create } from 'zustand';
import { Document, User, ChatMessage } from '../types';

interface Store {
  user: User | null;
  documents: Document[];
  chatMessages: ChatMessage[];
  setUser: (user: User | null) => void;
  addDocument: (document: Document) => void;
  removeDocument: (id: string) => void;
  addChatMessage: (message: ChatMessage) => void;
}

export const useStore = create<Store>((set) => ({
  user: null,
  documents: [],
  chatMessages: [],
  setUser: (user) => set({ user }),
  addDocument: (document) =>
    set((state) => ({ documents: [...state.documents, document] })),
  removeDocument: (id) =>
    set((state) => ({
      documents: state.documents.filter((doc) => doc.id !== id),
    })),
  addChatMessage: (message) =>
    set((state) => ({
      chatMessages: [...state.chatMessages, message],
    })),
}));