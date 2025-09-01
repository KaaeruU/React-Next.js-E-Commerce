import { useSearchParams } from "next/navigation";
import React from "react";
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
  const totalPages = limit ? Math.ceil(total / limit) : 1;
  const { appliedFilter } = useShopStore();
  const { updateParams } = useCategoryParams();

  const handleAppliedFilter = (values: { skip: number }) => {
    appliedFilter({ skip: values.skip });
    updateParams({
      skip: String(values.skip),
    });
    window?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const allPages = generatePagination(currentPage, totalPages);

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
              skip: (Number(page) - 1) * (limit || 10),
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
