import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useCategoryParams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const updateCategoryParam = useCallback(
    (term: string) => {
      const params = new URLSearchParams(searchParams);

      if (term) {
        params.set("category", term);
      } else {
        params.delete("category");
      }

      replace(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, replace]
  );

  const getCurrentCategory = useCallback(() => {
    return searchParams.get("category") || "";
  }, [searchParams]);

  return { updateCategoryParam, getCurrentCategory };
};
