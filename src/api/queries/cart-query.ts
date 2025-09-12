import { getCart } from "@/src/api/getCart";
import { cartQueryKey } from "@/src/utils/constants/query-key";
import { useQuery } from "@tanstack/react-query";

export function useGetCartQuery(userId = 1) {
  return useQuery({
    queryKey: [cartQueryKey, userId],
    queryFn: () => getCart(userId),

    // Cache configuration
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    enabled: !!userId,

    throwOnError: false,

    refetchIntervalInBackground: false,
  });
}
