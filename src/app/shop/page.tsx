"use client";

import { Suspense } from "react";
import { useForm } from "react-hook-form";
import { useGetProductsQuery } from "@/src/api/queries/products-query";
import { ErrorHandler } from "@/src/components/atom/ErrorHandler/ErrorHandler";
import { CardFilter } from "@/src/components/molecules/CardFilter/CardFilter";
import Card from "@/src/components/molecules/card/Card";
import CardSorter from "@/src/components/molecules/cardSorter/CardSorter";
import { useGlobalStore } from "@/src/store/global-store";

export default function Home() {
  const { selectedFilters } = useGlobalStore();
  const productFilterForm = useForm({
    mode: "onChange",
    defaultValues: {
      category: selectedFilters.category || "",
      sortBy: selectedFilters.sortBy || "",
      order: selectedFilters.order || "",
    },
  });

  const { data, isLoading, error } = useGetProductsQuery({
    category: selectedFilters.category,
    sortBy: selectedFilters.sortBy,
    order: selectedFilters.order,
  });
  if (error) {
    return <ErrorHandler message={error.message} cause={error.cause} />;
  }

  return (
    <>
      <div className="relative min-h-screen overflow-hidden pt-28">
        <div className="flex justify-end">
          <Suspense fallback={<div>Loading...</div>}>
            <CardSorter form={productFilterForm} />
          </Suspense>
        </div>

        <div className="default-grid grid-container">
          <div className="col-span-12 lg:col-span-3">
            {/*creare skeleton per cardfilter*/}
            <Suspense fallback={<div>Loading...</div>}>
              <CardFilter form={productFilterForm} />
            </Suspense>
          </div>
          <div
            className="col-span-12 grid gap-x-5 md:grid-cols-8 lg:col-start-4 lg:grid-cols-9
              2xl:grid-cols-12"
          >
            {isLoading && <p>Caricamento...</p>}
            {data?.map(
              ({
                id,
                title,
                price,
                images,
                rating,
                reviews,
                discountPercentage,
              }) => (
                <Card
                  key={id}
                  title={title}
                  price={price}
                  img={images[0] || ""}
                  score={rating}
                  mountOfReview={reviews.length}
                  discount={discountPercentage}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
