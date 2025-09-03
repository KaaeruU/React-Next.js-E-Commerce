import { useMemo } from "react";
import { range } from "../utils/generateRange";

export const usePagination = (
  currentPage: number,
  totalPages: number,
  siblingCount = 1
) => {
  return useMemo(() => {
    if (totalPages <= 5 + siblingCount * 2) {
      return range(1, totalPages);
    }

    const leftBoundary = currentPage - siblingCount;
    const rightBoundary = currentPage + siblingCount;

    const hasLeftEllipsis = leftBoundary > 2;
    const hasRightEllipsis = rightBoundary < totalPages - 1;

    if (!hasLeftEllipsis && hasRightEllipsis) {
      const startRange = 3 + siblingCount * 2;
      return [...range(1, startRange), "...", totalPages];
    }

    if (hasLeftEllipsis && !hasRightEllipsis) {
      const endRange = totalPages - 3 - siblingCount * 2;
      return [1, "...", ...range(endRange, totalPages)];
    }

    return [1, "...", ...range(leftBoundary, rightBoundary), "...", totalPages];
  }, [currentPage, totalPages, siblingCount]);
};
