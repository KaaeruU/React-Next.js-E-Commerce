import { getProducts } from "../getProducts";
import { productsQueryKey } from "@/src/utils/constants/query-key";
import { useQuery } from "@tanstack/react-query";

export function useProductsQuery() {
  return useQuery({
    queryKey: [productsQueryKey],
    queryFn: getProducts,
  });
}
