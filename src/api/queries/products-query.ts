import { getProducts } from "@/src/api/getProducts";
import { GetProductsParams } from "@/src/types/get-productsParams.type";
import { productsQueryKey } from "@/src/utils/constants/query-key";
import { useQuery } from "@tanstack/react-query";

export function useGetProductsQuery({
  category,
  sortBy,
  order,
  limit,
  skip,
}: GetProductsParams) {
  return useQuery({
    queryKey: [productsQueryKey, category, sortBy, order, limit, skip],
    queryFn: () =>
      getProducts({
        category,
        sortBy,
        order,
        limit,
        skip,
      }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
  });
}
