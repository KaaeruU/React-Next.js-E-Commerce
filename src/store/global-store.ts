import { create } from "zustand";

type GlobalStore = {
  isOpen: boolean;
  toggleMenu: () => void;
  setIsOpen: (open: boolean) => void;
  navHeight: number;
  setNavHeight: (height: number) => void;
  items: number;
  setItems: (count: number) => void;
};

export const useGlobalStore = create<GlobalStore>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsOpen: (open) => set({ isOpen: open }),
  navHeight: 67,
  setNavHeight: (height) => set({ navHeight: height }),
  items: 0,
  setItems: (items) => set({ items }),
}));
