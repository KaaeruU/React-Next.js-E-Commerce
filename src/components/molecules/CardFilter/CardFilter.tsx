"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorHandler } from "../../atom/ErrorHandler/ErrorHandler";
import { Icon } from "../../atom/icon/Icon";
import { Form, FormControl, FormField, FormItem } from "../Form";
import { useGetCategoriesQuery } from "@/src/api/queries/categories-query";
import { Button } from "@/src/components/atom/buttons/Button";
import { Heading } from "@/src/components/atom/heading/Heading";
import { filterItemVariants } from "@/src/lib/motion/variants";
import { useGlobalStore } from "@/src/store/global-store";
import * as motion from "motion/react-client";

export const CardFilter = () => {
  const { applyFilter, selectedCategory } = useGlobalStore();

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const handleParams = (term: string) => {
    if (term) {
      params.set("category", term);
    } else {
      params.delete("category");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    applyFilter(categoryFromUrl || "");
    form.setValue("category", categoryFromUrl || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { data, error } = useGetCategoriesQuery();

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const form = useForm({
    mode: "onChange",
    defaultValues: {
      category: selectedCategory || "",
    },
  });

  const handleApplyFilter = (values: { category: string }) => {
    applyFilter(values.category);
    if (window.innerWidth <= 768) {
      setIsFilterOpen(false);
    }
    handleParams(values.category);
    window?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleFilter = () => {
    setIsFilterOpen(() => !isFilterOpen);
  };

  if (error) {
    return <ErrorHandler message={error.message} />;
  }

  return (
    <div className="col-span-12 flex flex-col bg-neutral-50 px-6 py-4 lg:col-span-3 lg:px-5 lg:py-8">
      <div className="flex justify-between lg:mb-6">
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
        className="grid overflow-hidden lg:block"
      >
        <Heading as={"h4"} styledAs={"h4"} className="my-4 lg:mt-0">
          Tipologia
        </Heading>
        <div className="flex flex-col space-y-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleApplyFilter)}
              className="w-full"
            >
              {data?.map(({ slug }) => (
                <FormField
                  key={slug}
                  control={form.control}
                  name="category"
                  render={({
                    field: { value = selectedCategory, onChange },
                  }) => (
                    <FormItem className="contents">
                      <FormControl className="contents">
                        <label className="flex cursor-pointer items-center pb-3 pl-1">
                          <input
                            type="checkbox"
                            name="category"
                            className="mb-0 mr-3 h-5 w-5 appearance-none rounded-full border-2 border-gray-300
                              checked:bg-purple-500 focus:ring-1 focus:ring-neutral-900 focus:ring-offset-1"
                            checked={value === slug}
                            onChange={() =>
                              onChange(value === slug ? "" : slug)
                            }
                          />
                          <span className="capitalize">{slug}</span>
                        </label>
                      </FormControl>
                    </FormItem>
                  )}
                />
              ))}
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
