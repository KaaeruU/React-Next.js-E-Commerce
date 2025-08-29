import { create } from "zustand";
import { GetProductsParams } from "../types/get-products.type";

type ShopStore = {
  appliedFilter: (params: Partial<GetProductsParams>) => void;
  selectedFilters: { category?: string; sortBy?: string; order?: string };
};

export const useShopStore = create<ShopStore>((set) => ({
  appliedFilter: (params: Partial<GetProductsParams>) => {
    console.log("appliedFilter called with:", params);
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
