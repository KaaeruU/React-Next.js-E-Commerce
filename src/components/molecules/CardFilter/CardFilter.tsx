"use client";

import { useEffect, useMemo, useState } from "react";
import { CategoryCheckBox } from "../../atom/categoryCheckBox/CategoryCheckBox";
import { Form, FormControl, FormField, FormItem } from "../Form";
import { CardFilterProps } from "./cardFilter.type";
import { Icon } from "@/src/components/atom//icon/Icon";
import { ErrorHandler } from "@/src/components/atom/ErrorHandler/ErrorHandler";
import { Button } from "@/src/components/atom/buttons/Button";
import { Heading } from "@/src/components/atom/heading/Heading";
import { useCategoryParams } from "@/src/hooks/useCategoryParams";
import { filterItemVariants } from "@/src/lib/motion/variants";
import { useShopStore } from "@/src/store/shop-store";
import * as motion from "motion/react-client";

export const CardFilter = ({
  form,
  onFilterChange,
  categories,
  isFormDisabled = false,
}: CardFilterProps) => {
  const { appliedFilter } = useShopStore();
  const { updateParams, getCurrentCategory } = useCategoryParams();

  useEffect(() => {
    const categoryFromUrl = getCurrentCategory();
    appliedFilter({ category: categoryFromUrl });
    onFilterChange?.({ category: categoryFromUrl });

    form.setValue("category", categoryFromUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formFieldMemo = useMemo(() => {
    return categories?.map(({ slug }) => (
      <FormField
        key={slug}
        control={form.control}
        name="category"
        render={({ field: { value, onChange } }) => (
          <FormItem className="contents">
            <FormControl className="contents">
              <CategoryCheckBox slug={slug} value={value} onChange={onChange} />
            </FormControl>
          </FormItem>
        )}
      />
    ));
  }, [categories, form.control]);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleAppliedFilter = (values: {
    category: string;
    sortBy?: string;
    order?: string;
    skip?: number;
    page?: string;
  }) => {
    if (onFilterChange) {
      onFilterChange({
        category: values.category,
        sortBy: "",
        order: "",
        skip: 0,
        page: "1",
      });
    }
    appliedFilter({
      category: values.category,
      skip: 0,
      page: 1,
      sortBy: "",
      order: "",
    });
    updateParams({
      category: values.category,
      sortBy: "",
      order: "",
      skip: "0",
      page: "1",
    });

    setIsFilterOpen(false);

    window?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleFilter = () => {
    setIsFilterOpen(() => !isFilterOpen);
  };

  if (!isFormDisabled) {
    return <ErrorHandler message={"Error loading categories"} />;
  }

  return (
    <div
      className="col-span-12 flex flex-col rounded-xl border border-black bg-neutral-50 px-6 py-4
        lg:col-span-3 lg:px-5 lg:py-8"
    >
      <div
        className="flex justify-between lg:mb-6"
        onClick={() => toggleFilter()}
      >
        <Heading as={"h2"} styledAs={"h2"}>
          Filtra i PRODOTTI
        </Heading>
        <button onClick={() => toggleFilter()} className="lg:hidden">
          <Icon name={"Arrow"} size={"14"} weight={"bold"} />
        </button>
      </div>
      <motion.div
        initial="closed"
        animate={isFilterOpen ? "open" : "closed"}
        variants={filterItemVariants}
        className="overflow-hidden lg:!h-auto lg:!opacity-100"
      >
        <Heading as={"h4"} styledAs={"h4"} className="my-4 lg:mt-0">
          Tipologia
        </Heading>
        <div className="flex flex-col space-y-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleAppliedFilter)}
              className="w-full"
            >
              {formFieldMemo}
              <div className="mt-6">
                <Button
                  type="submit"
                  label={"Applica filtro"}
                  isDisabled={false}
                  variant={"primary"}
                  className="w-full"
                />
              </div>
            </form>
          </Form>
        </div>
      </motion.div>
    </div>
  );
};
