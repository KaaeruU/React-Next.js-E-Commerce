import { getCategories } from "@/src/api/getCategories";
import { categoriesQueryKey } from "@/src/utils/constants/query-key";
import { useQuery } from "@tanstack/react-query";

export function useGetCategoriesQuery() {
  return useQuery({
    queryKey: [categoriesQueryKey],
    queryFn: getCategories,
  });
}
