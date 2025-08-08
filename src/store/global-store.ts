import { create } from "zustand";

type GlobalStore = {
  isOpen: boolean;
  toggleMenu: () => void;
  setIsOpen: (open: boolean) => void;
  navHeight: number;
  setNavHeight: (height: number) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  tempSelectedCategory: string;
  setTempSelectedCategory: (category: string) => void;
  applyFilter: () => void;
};

export const useGlobalStore = create<GlobalStore>((set, get) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsOpen: (open) => set({ isOpen: open }),
  navHeight: 67,
  setNavHeight: (height) => set({ navHeight: height }),
  selectedCategory: "",
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  tempSelectedCategory: "",
  setTempSelectedCategory: (category) =>
    set({ tempSelectedCategory: category }),
  applyFilter: () => {
    const { tempSelectedCategory } = get();
    set({ selectedCategory: tempSelectedCategory });
  },
}));
