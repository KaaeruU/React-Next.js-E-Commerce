export interface ShopFilters {
  category?: string;
  sortBy?: string;
  order?: string;
  limit?: number;
  skip?: number;
}

export const DEFAULT_FILTERS: ShopFilters = {
  category: "",
  sortBy: "",
  order: "",
  limit: 9,
  skip: 0,
};

export function getFiltersFromCookie(cookieValue?: string): ShopFilters {
  if (!cookieValue) return DEFAULT_FILTERS;

  try {
    const parsed = JSON.parse(cookieValue);
    return {
      ...DEFAULT_FILTERS,
      ...parsed,
    };
  } catch (error) {
    console.error("Error parsing filters cookie:", error);
    return DEFAULT_FILTERS;
  }
}

export function filtersToString(filters: ShopFilters): string {
  return JSON.stringify(filters);
}
