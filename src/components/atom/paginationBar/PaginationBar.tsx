import { useActionState, useEffect } from "react";
import { Icon } from "../icon/Icon";
import { Text } from "../text/Text";
import { useCategoryParams } from "@/src/hooks/useCategoryParams";
import { usePagination } from "@/src/hooks/usePagination";
import { updateFiltersAction } from "@/src/lib/actions/updateFilter";
import { useShopStore } from "@/src/store/shop-store";

type PaginationProps = {
  limit?: number;
  skip?: number;
  total: number;
};

const PaginationBar = ({ limit, total }: PaginationProps) => {
  const { appliedFilter, calcTotalPages } = useShopStore();
  const { getCurrentPage } = useCategoryParams();
  const [, formAction] = useActionState(updateFiltersAction, null);

  const totalPages = calcTotalPages(total);
  const currentPages = usePagination(Number(getCurrentPage()), totalPages, 2);

  useEffect(() => {
    const pageFromURL = getCurrentPage();
    const pageNumber = Number(pageFromURL) || 1;
    const skipValue = (pageNumber - 1) * (limit || 9);

    appliedFilter({
      page: pageNumber,
      skip: skipValue,
    });
  }, []);

  const { isFirstPage, isLastPageOrSinglePage } = {
    isFirstPage: Number(getCurrentPage()) === 1,
    isLastPageOrSinglePage:
      Number(getCurrentPage()) === totalPages || totalPages === 1,
  };

  // exportare
  const PaginationForm = ({
    page,
    children,
    disabled = false,
    className = "",
  }: {
    page: number;
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
  }) => {
    const skip = (page - 1) * (limit || 9);

    return (
      <form action={formAction} className="contents">
        <input type="hidden" name="page" value={page.toString()} />
        <input type="hidden" name="skip" value={skip.toString()} />
        <button type="submit" disabled={disabled} className={className}>
          {children}
        </button>
      </form>
    );
  };

  return (
    <div className="flex justify-center py-10">
      <PaginationForm
        page={Number(getCurrentPage()) - 1}
        disabled={isFirstPage}
        className={isFirstPage ? "text-gray-600" : ""}
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
        >
          {page}
        </PaginationForm>
      ))}

      <PaginationForm
        page={Number(getCurrentPage()) + 1}
        disabled={isLastPageOrSinglePage}
        className={isLastPageOrSinglePage ? "text-gray-600" : ""}
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
