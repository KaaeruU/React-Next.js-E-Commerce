import { useEffect } from "react";
import { Text } from "../text/Text";
import { useCategoryParams } from "@/src/hooks/useCategoryParams";
import { useShopStore } from "@/src/store/shop-store";
import { generatePagination } from "@/src/utils/generatePagination";

type PaginationProps = {
  limit?: number;
  skip?: number;
  total: number;
};

const PaginationBar = ({ limit, total }: PaginationProps) => {
  const { appliedFilter, calcTotalPages } = useShopStore();
  const { updateParams, getCurrentPage } = useCategoryParams();
  const totalPages = calcTotalPages(total);

  useEffect(() => {
    const pageFromURL = getCurrentPage();
    const pageNumber = Number(pageFromURL) || 1;

    // evitare il ricalcolo di skip ???
    const skipValue = (pageNumber - 1) * (limit || 9);

    appliedFilter({
      page: pageNumber,
      skip: skipValue,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isFirstPage, isLastPageOrSinglePage } = {
    isFirstPage: Number(getCurrentPage()) === 1,
    isLastPageOrSinglePage:
      Number(getCurrentPage()) === totalPages || totalPages === 1,
  };

  const handleAppliedFilter = (values: { skip: number; page: number }) => {
    appliedFilter({ skip: values.skip });

    updateParams({
      skip: String(values.skip),
      page: String(values.page),
    });
    window?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const allPages = generatePagination(Number(getCurrentPage()), totalPages);

  return (
    <div>
      <button
        disabled={isFirstPage}
        className={`${isFirstPage ? "text-gray-600" : ""}`}
        onClick={() =>
          handleAppliedFilter({
            skip: (Number(getCurrentPage()) - 2) * (limit || 9),
            page: Number(getCurrentPage()) - 1,
          })
        }
      >
        <Text as={"p"} styledAs={"label"}>
          Precedente
        </Text>
      </button>
      {allPages.map((page, index) => (
        <button
          key={index}
          className={`p-3 hover:text-primary-purple hover:underline hover:underline-offset-4
          focus:text-primary-purple focus:underline focus:underline-offset-4`}
          disabled={page === "..." ? true : false}
          onClick={() =>
            handleAppliedFilter({
              skip: (Number(page) - 1) * (limit || 9),
              page: Number(page),
            })
          }
        >
          {page}
        </button>
      ))}
      <button
        disabled={isLastPageOrSinglePage}
        className={`${isLastPageOrSinglePage ? "text-gray-600" : ""}`}
        onClick={() =>
          handleAppliedFilter({
            skip: (Number(getCurrentPage()) + 1) * (limit || 9),
            page: Number(getCurrentPage()) + 1,
          })
        }
      >
        <Text as={"p"} styledAs={"label"}>
          Avanti
        </Text>
      </button>
    </div>
  );
};

export default PaginationBar;
