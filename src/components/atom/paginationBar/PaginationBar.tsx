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
  const { appliedFilter, getTotalPages } = useShopStore();
  const { updateParams, getCurrentPage } = useCategoryParams();

  const handleAppliedFilter = (values: { skip: number; page: number }) => {
    appliedFilter({ skip: values.skip });

    updateParams({
      skip: String(values.skip),
      page: String(values.page),
    });
    window?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const allPages = generatePagination(
    Number(getCurrentPage()),
    getTotalPages(total)
  );

  return (
    <div>
      <Text as={"p"} styledAs={"label"}>
        Precedente
      </Text>
      {allPages.map((page, index) => (
        <button
          key={index}
          className="p-4"
          onClick={() =>
            handleAppliedFilter({
              skip: (Number(page) - 1) * (limit || 30),
              page: Number(page),
            })
          }
        >
          {page}
        </button>
      ))}

      <Text as={"p"} styledAs={"label"}>
        Avanti
      </Text>
    </div>
  );
};

export default PaginationBar;
