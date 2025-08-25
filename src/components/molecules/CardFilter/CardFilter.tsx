"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Icon } from "../../atom/icon/Icon";
import { Form, FormControl, FormField, FormItem } from "../Form";
import { useGetCategoriesQuery } from "@/src/api/queries/categories-query";
import { Button } from "@/src/components/atom/buttons/Button";
import { Heading } from "@/src/components/atom/heading/Heading";
import { useResponsive } from "@/src/hooks/useResponsive";
import { filterItemVariants } from "@/src/lib/motion/variants";
import { useGlobalStore } from "@/src/store/global-store";
import * as motion from "motion/react-client";

export const CardFilter = () => {
  const {
    tempSelectedCategory,
    setTempSelectedCategory,
    applyFilter,
    selectedCategory,
  } = useGlobalStore();

  const router = useRouter();

  const form = useForm({
    mode: "onSubmit",
    defaultValues: {
      category: selectedCategory,
    },
  });

  const { data, error } = useGetCategoriesQuery();

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const isLargeDevice = useResponsive("only screen and (min-width : 993px)");

  const handleCategoryChange = (categoryName: string) => {
    setTempSelectedCategory(
      tempSelectedCategory === categoryName ? "" : categoryName
    );
  };

  const handleApplyFilter = () => {
    applyFilter();
    setIsFilterOpen(false);
    if (tempSelectedCategory) {
      router.push(`/shop/${tempSelectedCategory.toLocaleLowerCase()}`);
    } else {
      router.push(`/shop`);
    }

    if (window) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleFilter = () => {
    setIsFilterOpen(() => !isFilterOpen);
  };

  return (
    <div className="col-span-12 flex flex-col bg-neutral-50 px-6 py-4 lg:col-span-3 lg:px-5 lg:py-8">
      <div className="flex justify-between lg:mb-6">
        <Heading as={"h2"} styledAs={"h2"}>
          Filtra i PRODOTTI
        </Heading>
        {!isLargeDevice && (
          <button onClick={() => toggleFilter()} className="lg:hidden">
            <Icon name={"Arrow"} size={"14"} weight={"bold"} />
          </button>
        )}
      </div>

      {/* Su desktop sempre visibile, su mobile animato */}
      {isLargeDevice ? (
        <div>
          <Heading as={"h4"} styledAs={"h4"} className="mb-4">
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
                    render={() => (
                      <FormItem className="contents">
                        <FormControl className="contents">
                          <label className="flex cursor-pointer items-center pb-3 pl-1">
                            <input
                              type="checkbox"
                              name="category"
                              className="mb-0 mr-3 h-5 w-5 appearance-none rounded-full border-2 border-gray-300
                                checked:bg-purple-500 focus:ring-1 focus:ring-neutral-900 focus:ring-offset-1"
                              checked={
                                tempSelectedCategory
                                  ? tempSelectedCategory === slug
                                  : selectedCategory === slug
                              }
                              onChange={() => handleCategoryChange(slug)}
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
        </div>
      ) : (
        <motion.div
          initial="closed"
          animate={isFilterOpen ? "open" : "closed"}
          variants={filterItemVariants}
          className="overflow-hidden"
        >
          <div>
            <Heading as={"h4"} styledAs={"h4"} className="my-4">
              Tipologia
            </Heading>
            <div className="flex flex-col space-y-2">
              {error ? (
                <p>Errore nel caricamento delle categorie</p>
              ) : (
                data?.map(({ slug }) => (
                  <label
                    className="flex cursor-pointer items-center pb-3 pl-1"
                    key={slug}
                  >
                    <input
                      type="checkbox"
                      name="category"
                      className="mb-0 mr-3 h-5 w-5 appearance-none rounded-full border-2 border-gray-300
                        checked:bg-purple-500 focus:ring-1 focus:ring-neutral-900 focus:ring-offset-1"
                      checked={tempSelectedCategory === slug}
                      onChange={() => handleCategoryChange(slug)}
                    />
                    <span className="capitalize">{slug}</span>
                  </label>
                ))
              )}
            </div>

            <div className="mt-6">
              <Button
                label={"Applica filtro"}
                isDisabled={false}
                variant={"primary"}
                onClick={handleApplyFilter}
                className="w-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
