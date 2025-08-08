"use client";

import { useCategoriesQuery } from "@/src/api/queries/categories-query";
import { Button } from "@/src/components/atom/buttons/Button";
import { Heading } from "@/src/components/atom/heading/Heading";
import { Input } from "@/src/components/atom/input/Input";
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
      <Heading as={"h2"} styledAs={"h2"}>
        Filtra i PRODOTTI
      </Heading>
      <div>
        <Heading as={"h4"} styledAs={"h4"}>
          Tipologia
        </Heading>
        <div className="flex flex-col space-y-2">
          {error ? (
            <p>Errore nel caricamento delle categorie</p>
          ) : (
            data?.map(({ name }) => (
              <label className="flex cursor-pointer items-center" key={name}>
                <Input
                  placeholder=""
                  type="checkbox"
                  name="category"
                  className="mb-0 mr-2"
                  checked={tempSelectedCategory === name}
                  onChange={() => handleCategoryChange(name)}
                />
                <span className="capitalize">{name}</span>
              </label>
            ))
          )}
        </div>

        <div className="mt-6 space-y-2">
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
