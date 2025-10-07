import { create } from "zustand";

type GlobalStore = {
  isOpen: boolean;
  toggleMenu: () => void;
  setIsOpen: (open: boolean) => void;
  navHeight: number;
  setNavHeight: (height: number) => void;
  cartItemsCount: number;
  setCartItemsCount: (count: number) => void;
};

export const useGlobalStore = create<GlobalStore>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsOpen: (open) => set({ isOpen: open }),
  navHeight: 67,
  setNavHeight: (height) => set({ navHeight: height }),
  cartItemsCount: 0,
  setCartItemsCount: (count) => set({ cartItemsCount: count }),
}));
