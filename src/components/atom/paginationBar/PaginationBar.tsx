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
  console.log(`PaginationBar received: total=${total}, limit=${limit}`);
  const totalPages = limit ? Math.ceil(total / limit) : 1;
  console.log(`Calculated totalPages: ${totalPages}`);

  const { appliedFilter } = useShopStore();
  const { updateParams, getCurrentPage } = useCategoryParams();

  const handleAppliedFilter = (values: { skip: number; page: number }) => {
    appliedFilter({ skip: values.skip });

    updateParams({
      skip: String(values.skip),
      page: String(values.page),
    });
    window?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const allPages = generatePagination(Number(getCurrentPage()), totalPages);
  console.log(getCurrentPage());

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
