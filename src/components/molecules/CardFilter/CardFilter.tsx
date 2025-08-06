"use client";

import { useCategoriesQuery } from "@/src/api/queries/categories-query";
import { Button } from "@/src/components/atom/buttons/Button";
import { Heading } from "@/src/components/atom/heading/Heading";
import { Input } from "@/src/components/atom/input/Input";
import { useGlobalStore } from "@/src/store/global-store";

export const CardFilter = () => {
  const { selectedCategory } = useGlobalStore();
  const { data, error } = useCategoriesQuery();

  return (
    <div className="col-span-3 hidden bg-neutral-50 p-8 lg:flex lg:flex-col">
      <Heading as={"h2"} styledAs={"h2"}>
        Filtra i PRODOTTI
      </Heading>
      <div>
        <Heading as={"h4"} styledAs={"h4"}>
          Tipologia
        </Heading>
        <div className="flex flex-col">
          {error ? (
            <p>Errore nel caricamento delle categorie</p>
          ) : (
            data?.map(({ name }) => (
              <label className="flex items-center" key={name}>
                <Input
                  placeholder={name}
                  type="radio"
                  className="mb-0"
                  checked={selectedCategory.includes(name)}
                />
                <span className="ml-2">{name}</span>
              </label>
            ))
          )}
          <Button
            label={"Applica filtro"}
            isDisabled={false}
            variant={"primary"}
            className="mt-4"
          />
        </div>
      </div>
    </div>
  );
};
