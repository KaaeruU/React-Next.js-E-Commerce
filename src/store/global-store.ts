import { create } from "zustand";
import { GetProductsParams } from "../types/get-products.type";

type SelectedFiltersKeys = keyof GetProductsParams;

type GlobalStore = {
  isOpen: boolean;
  toggleMenu: () => void;
  setIsOpen: (open: boolean) => void;
  navHeight: number;
  setNavHeight: (height: number) => void;
  applyFilter: (key: SelectedFiltersKeys, value: string) => void;
  selectedFilters: { category?: string; sortBy?: string; order?: string };
};

export const useGlobalStore = create<GlobalStore>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsOpen: (open) => set({ isOpen: open }),
  navHeight: 67,
  setNavHeight: (height) => set({ navHeight: height }),
  selectedFilters: { category: "", sortBy: "", order: "" },
  applyFilter: (key: SelectedFiltersKeys, value: string) => {
    set((state) => ({
      selectedFilters: {
        ...state.selectedFilters,
        [key]: value,
      },
    }));
  },
}));
