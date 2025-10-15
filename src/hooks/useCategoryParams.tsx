import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useCategoryParams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const updateParams = useCallback(
    //Record<string | enum>??????
    (params: Record<string, string | null>) => {
      const urlParams = new URLSearchParams(searchParams);
      if (urlParams.has("modalId")) {
        urlParams.delete("modalId");
      }
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

  const getCurrentPage = useCallback(() => {
    return searchParams.get("page") || "";
  }, [searchParams]);

  return {
    updateParams,
    getCurrentCategory,
    getCurrentPage,
    getCurrentOrder,
    getCurrentSortBy,
  };
};
