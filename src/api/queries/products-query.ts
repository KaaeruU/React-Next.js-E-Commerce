import { getProducts } from "@/src/api/getProducts";
import { productsQueryKey } from "@/src/utils/constants/query-key";
import { useQuery } from "@tanstack/react-query";

export function useProductsQuery(filter?: string) {
  return useQuery({
    queryKey: [productsQueryKey, filter],
    queryFn: () => getProducts(filter),
    enabled: true,
    staleTime: 5 * 60 * 1000,
  });
}
