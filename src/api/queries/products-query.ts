import { getProducts } from "@/src/api/getProducts";
import { GetProductsParams } from "@/src/types/get-products.type";
import { productsQueryKey } from "@/src/utils/constants/query-key";
import { useQuery } from "@tanstack/react-query";

export function useGetProductsQuery({
  category,
  sortBy,
  order,
}: GetProductsParams) {
  return useQuery({
    queryKey: [productsQueryKey, category, sortBy, order],
    queryFn: () => getProducts({ category, sortBy, order }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
  });
}
