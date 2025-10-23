"use client";

import { useEffect } from "react";
import { Icon } from "../icon/Icon";
import { PaginationForm } from "../paginationForm/PaginationForm";
import { Text } from "../text/Text";
import { useCategoryParams } from "@/src/hooks/useCategoryParams";
import { usePagination } from "@/src/hooks/usePagination";
import { useShopStore } from "@/src/store/shop-store";

type PaginationProps = {
  limit?: number;
  skip?: number;
  total: number;
  onFilterChange?: (filters: {
    page?: string;
    skip?: string;
    sortBy?: string;
    order?: string;
  }) => void;
};

const PaginationBar = ({
  limit = 9,
  total,
  onFilterChange,
}: PaginationProps) => {
  const { appliedFilter, calcTotalPages } = useShopStore();
  const { getCurrentPage, updateParams } = useCategoryParams();
  const { selectedFilters } = useShopStore();

  const totalPages = calcTotalPages(total);
  const currentPages = usePagination(Number(getCurrentPage()), totalPages, 2);

  useEffect(() => {
    const pageFromURL = getCurrentPage();
    const pageNumber = Number(pageFromURL) || 1;
    const skipValue = (pageNumber - 1) * limit;

    appliedFilter({
      page: pageNumber,
      skip: skipValue,
    });

    updateParams({ page: pageNumber.toString(), skip: skipValue.toString() });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageChange = (page: number, skip: number) => {
    const updatedFilters = {
      page: page.toString(),
      skip: skip.toString(),
      sortBy: selectedFilters.sortBy,
      order: selectedFilters.order,
    };

    if (onFilterChange) {
      onFilterChange(updatedFilters);
    }

    appliedFilter({
      ...selectedFilters,
      page,
      skip,
    });

    updateParams({
      page: page.toString(),
      skip: skip.toString(),
      ...(selectedFilters.sortBy && { sortBy: selectedFilters.sortBy }),
      ...(selectedFilters.order && { order: selectedFilters.order }),
    });
  };

  const { isFirstPage, isLastPageOrSinglePage } = {
    isFirstPage: Number(getCurrentPage()) === 1,
    isLastPageOrSinglePage:
      Number(getCurrentPage()) === totalPages || totalPages === 1,
  };

  return totalPages === 1 ? null : (
    <div className="flex justify-center py-10">
      <PaginationForm
        page={Number(getCurrentPage()) - 1}
        disabled={isFirstPage}
        className={isFirstPage ? "text-gray-600" : ""}
        limit={limit}
        onPageChange={handlePageChange}
      >
        <Text as={"p"} styledAs={"label"} className="hidden md:block">
          Precedente
        </Text>
        <Icon
          name={"LeftArrow"}
          size={"14"}
          weight={"bold"}
          className="mr-4 block md:hidden"
        />
      </PaginationForm>

      {currentPages.map((page, index) => (
        <PaginationForm
          key={index}
          page={Number(page)}
          disabled={page === "..."}
          className={`p-3 hover:text-primary-purple hover:underline hover:underline-offset-4
            focus:text-primary-purple focus:underline focus:underline-offset-4 ${
            page === "..." ? "cursor-default" : "" }`}
          limit={limit}
          onPageChange={handlePageChange}
        >
          {page}
        </PaginationForm>
      ))}

      <PaginationForm
        page={Number(getCurrentPage()) + 1}
        disabled={isLastPageOrSinglePage}
        className={isLastPageOrSinglePage ? "text-gray-600" : ""}
        limit={limit}
        onPageChange={handlePageChange}
      >
        <Text as={"p"} styledAs={"label"} className="hidden md:block">
          Avanti
        </Text>
        <Icon
          name={"RightArrow"}
          size={"14"}
          weight={"bold"}
          className="ml-4 block md:hidden"
        />
      </PaginationForm>
    </div>
  );
};

export default PaginationBar;
