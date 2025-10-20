import { useEffect, useState } from "react";
import { CheckboxField } from "../../atom/checkbox/Checkbox";
import { Form, FormControl, FormField, FormItem } from "../Form";
import { CardSorterProps } from "./cardSorter.type";
import { Button } from "@/src/components/atom/buttons/Button";
import { Heading } from "@/src/components/atom/heading/Heading";
import { Icon } from "@/src/components/atom/icon/Icon";
import { Text } from "@/src/components/atom/text/Text";
import { useCategoryParams } from "@/src/hooks/useCategoryParams";
import { filterItemVariants } from "@/src/lib/motion/variants";
import { useShopStore } from "@/src/store/shop-store";
import * as motion from "motion/react-client";

const CardSorter = ({
  form,
  numberOfProducts,
  onSortChange,
}: CardSorterProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { appliedFilter } = useShopStore();
  const { updateParams, getCurrentSortBy, getCurrentOrder } =
    useCategoryParams();

  useEffect(() => {
    const sortByFromUrl = getCurrentSortBy();
    const orderFromUrl = getCurrentOrder();
    appliedFilter({ sortBy: sortByFromUrl, order: orderFromUrl });

    form.setValue("order", orderFromUrl);
    form.setValue("sortBy", sortByFromUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCurrentOrder, getCurrentSortBy]);

  const toggleFilter = () => {
    setIsFilterOpen(() => !isFilterOpen);
  };

  const handleAppliedFilter = (values: { sortBy: string; order: string }) => {
    if (onSortChange) {
      onSortChange(values);
    }
    appliedFilter({ sortBy: values.sortBy, order: values.order });
    updateParams({ sortBy: values.sortBy, order: values.order });

    setIsFilterOpen(false);
  };

  return (
    <div
      className="lg:mt:0 col-span-2 my-6 flex flex-col items-center md:col-span-8 md:flex-row
        md:justify-between lg:col-span-9 lg:mb-6"
    >
      <Heading as={"h2"} styledAs={"h2"} className="whitespace-nowrap pr-2">
        {numberOfProducts} PRODOTTI presenti
      </Heading>

      <div
        className="mt-5 w-full justify-center border-2 border-black bg-neutral-50 p-4 md:mt-0
          md:w-1/3 md:px-4 md:py-2"
      >
        <div className="contents" onClick={() => toggleFilter()}>
          <Text as={"label"} styledAs={"body"} className="cursor-pointer">
            Filtra per:...
          </Text>
          <button aria-label="sortlist">
            <Icon name={"Arrow"} size={"14"} weight={"bold"} />
          </button>
        </div>
        <motion.div
          initial="closed"
          animate={isFilterOpen ? "open" : "closed"}
          variants={filterItemVariants}
          className="overflow-hidden"
        >
          <div className="flex flex-col space-y-2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleAppliedFilter)}
                className="w-full"
              >
                <FormField
                  control={form.control}
                  name="sortBy"
                  render={({ field }) => (
                    <FormItem className="contents">
                      <FormControl className="contents">
                        <div className="flex flex-col space-y-2">
                          <CheckboxField
                            field={field}
                            value="title"
                            label="Titolo"
                          />
                          <CheckboxField
                            field={field}
                            value="price"
                            label="Prezzo"
                          />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="order"
                  render={({ field }) => (
                    <FormItem className="contents">
                      <FormControl className="contents">
                        <div className="flex flex-col space-y-2">
                          <CheckboxField
                            field={field}
                            value="asc"
                            label="Crescente"
                          />
                          <CheckboxField
                            field={field}
                            value="desc"
                            label="Decrescente"
                          />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className="mt-6">
                  <Button
                    type="submit"
                    label={"Applica"}
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
    </div>
  );
};

export default CardSorter;
