import { getCart } from "@/src/api/getCart";
import { cartQueryKey } from "@/src/utils/constants/query-key";
import { useQuery } from "@tanstack/react-query";

export function useGetCartQuery(userId = 1) {
  return useQuery({
    queryKey: [cartQueryKey],
    queryFn: () => getCart(userId),
  });
}
