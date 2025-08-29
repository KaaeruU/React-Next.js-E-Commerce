import { create } from "zustand";
import { GetProductsParams } from "../types/get-products.type";

type ShopStore = {
  appliedFilter: (params: GetProductsParams) => void;
  selectedFilters: GetProductsParams;
};

export const useShopStore = create<ShopStore>((set) => ({
  appliedFilter: (params: GetProductsParams) => {
    set((state) => ({
      selectedFilters: {
        ...state.selectedFilters,
        ...params,
      },
    }));
  },
  selectedFilters: {
    category: "",
    sortBy: "",
    order: "",
  },
}));
