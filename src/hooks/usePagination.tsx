import { useMemo } from "react";
import { range } from "../utils/generateRange";

export const usePagination = (currentPage: number, totalPages: number) => {
  return useMemo(() => {
    const shouldHaveRightEllipsis = currentPage >= totalPages - 3;
    const shouldHaveLeftEllipsis = currentPage <= 4;

    if (totalPages <= 4) {
      return range(1, totalPages);
    }

    if (shouldHaveLeftEllipsis) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }

    if (shouldHaveRightEllipsis) {
      return [1, "...", ...range(currentPage - 3, totalPages)];
    }

    return [
      1,
      "...",
      ...range(currentPage - 2, currentPage + 2),
      "...",
      totalPages,
    ];
  }, [currentPage, totalPages]);
};
