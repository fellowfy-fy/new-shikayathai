import { create } from 'zustand';
import { ReactNode } from 'react';

interface ModalState {
  isVisible: boolean;
  content: ReactNode | null;
  showModal: (content: ReactNode) => void;
  hideModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  isVisible: false,
  content: null,
  showModal: (content) => set({ isVisible: true, content }),
  hideModal: () => set({ isVisible: false, content: null }),
}));

export default useModalStore;
