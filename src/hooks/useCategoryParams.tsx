import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useCategoryParams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // Funzione generica per aggiornare qualsiasi parametro
  const updateCategoryParam = useCallback(
    (params: Record<string, string | null>) => {
      const urlParams = new URLSearchParams(searchParams);

      for (const key in params) {
        const value = params[key];
        if (value) {
          urlParams.set(key, value);
        } else {
          urlParams.delete(key);
        }
      }

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
    updateCategoryParam,
    getCurrentCategory,
    getCurrentOrder,
    getCurrentSortBy,
  };
};
