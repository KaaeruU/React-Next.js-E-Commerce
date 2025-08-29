import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { GetProductsParams } from "../types/get-products.type";

type SelectedFiltersKeys = keyof GetProductsParams;

export const useCategoryParams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const updateParams = useCallback(
    (keys: Array<SelectedFiltersKeys>, values: Array<string>) => {
      const urlParams = new URLSearchParams(searchParams);

      keys.forEach((key, index) => {
        const value = values[index];
        if (value) {
          urlParams.set(key, value);
        } else {
          urlParams.delete(key);
        }
      });

      replace(`${pathname}?${urlParams.toString()}`);
    },
    [searchParams, pathname, replace]
  );
  const getCurrentCategory = useCallback(() => {
    return searchParams.get("category") || "";
  }, [searchParams]);
  const getCurrentOrder = useCallback(() => {
    return searchParams.get("order") || "";
  }, [searchParams]);
  const getCurrentSortBy = useCallback(() => {
    return searchParams.get("sortBy") || "";
  }, [searchParams]);

  return {
    updateParams,
    getCurrentCategory,
    getCurrentOrder,
    getCurrentSortBy,
  };
};
