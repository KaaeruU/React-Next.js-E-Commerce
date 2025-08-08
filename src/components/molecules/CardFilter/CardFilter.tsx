"use client";

import { useCategoriesQuery } from "@/src/api/queries/categories-query";
import { Button } from "@/src/components/atom/buttons/Button";
import { Heading } from "@/src/components/atom/heading/Heading";
import { useGlobalStore } from "@/src/store/global-store";

export const CardFilter = () => {
  const { tempSelectedCategory, setTempSelectedCategory, applyFilter } =
    useGlobalStore();

  const { data, error } = useCategoriesQuery();

  const handleCategoryChange = (categoryName: string) => {
    if (tempSelectedCategory === categoryName) {
      setTempSelectedCategory("");
    } else setTempSelectedCategory(categoryName);
  };

  const handleApplyFilter = () => {
    applyFilter();
  };

  return (
    <div className="col-span-3 hidden bg-neutral-50 p-8 lg:flex lg:flex-col">
      <Heading as={"h2"} styledAs={"h2"} className="mb-6">
        Filtra i PRODOTTI
      </Heading>
      <div>
        <Heading as={"h4"} styledAs={"h4"} className="mb-4">
          Tipologia
        </Heading>
        <div className="flex flex-col space-y-2">
          {error ? (
            <p>Errore nel caricamento delle categorie</p>
          ) : (
            data?.map(({ name }) => (
              <label
                className="flex cursor-pointer items-center pb-3"
                key={name}
              >
                <input
                  type="checkbox"
                  name="category"
                  className="mb-0 mr-3 h-5 w-5 appearance-none rounded-full border-2 border-gray-300
                    checked:bg-purple-500 focus:ring-1 focus:ring-neutral-900 focus:ring-offset-1"
                  checked={tempSelectedCategory === name}
                  onChange={() => handleCategoryChange(name)}
                />
                <span className="capitalize">{name}</span>
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
          />
        </div>
      </div>
    </div>
  );
};
