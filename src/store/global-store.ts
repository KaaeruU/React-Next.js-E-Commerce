import { create } from "zustand";

type MenuStore = {
  isOpen: boolean;
  toggleMenu: () => void;
  setIsOpen: (open: boolean) => void;
  navHeight: number;
  setNavHeight: (height: number) => void;
};

export const useMenuStore = create<MenuStore>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsOpen: (open) => set({ isOpen: open }),
  navHeight: 67,
  setNavHeight: (height) => set({ navHeight: height }),
}));
