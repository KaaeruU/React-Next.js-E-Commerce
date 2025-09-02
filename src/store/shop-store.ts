import { create } from "zustand";
import { GetProductsParams } from "@/src/types/get-productsParams.type";

type ShopStore = {
  appliedFilter: (params: GetProductsParams) => void;
  selectedFilters: GetProductsParams;
  totalPages: number;
  getTotalPages: (total: number) => number;
};
export const useShopStore = create<ShopStore>((set, get) => ({
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
    limit: 30,
    skip: 0,
    page: 1,
  },
  totalPages: 1,
  getTotalPages: (total) => {
    const { limit } = get().selectedFilters;
    return limit && total ? Math.ceil(total / limit) : 1;
  },
}));
