import { create } from 'zustand';

interface UIState {
  activeSection: string;
  isSidebarOpen: boolean;
  setActiveSection: (section: string) => void;
  toggleSidebar: () => void;
  setSidebarOpen: (isOpen: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  activeSection: 'overview',
  isSidebarOpen: true,
  setActiveSection: (section) => set({ activeSection: section }),
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setSidebarOpen: (isOpen) => set({ isSidebarOpen: isOpen }),
}));