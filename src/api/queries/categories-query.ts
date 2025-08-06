import { getCategories } from "@/src/api/getCategories";
import { categoriesQueryKey } from "@/src/utils/constants/query-key";
import { useQuery } from "@tanstack/react-query";

export function useCategoriesQuery() {
  return useQuery({
    queryKey: [categoriesQueryKey],
    queryFn: getCategories,
  });
}
