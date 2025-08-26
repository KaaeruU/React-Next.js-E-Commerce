import { create } from "zustand";

type GlobalStore = {
  isOpen: boolean;
  toggleMenu: () => void;
  setIsOpen: (open: boolean) => void;
  navHeight: number;
  setNavHeight: (height: number) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  applyFilter: (category: string) => void;
};

export const useGlobalStore = create<GlobalStore>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsOpen: (open) => set({ isOpen: open }),
  navHeight: 67,
  setNavHeight: (height) => set({ navHeight: height }),
  selectedCategory: "",
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  applyFilter: (category) => {
    set({ selectedCategory: category });
  },
}));
