"use client";

import { Suspense } from "react";
import { useForm } from "react-hook-form";
import { useGetProductsQuery } from "@/src/api/queries/products-query";
import { ErrorHandler } from "@/src/components/atom/ErrorHandler/ErrorHandler";
import PaginationBar from "@/src/components/atom/paginationBar/PaginationBar";
import { CardFilter } from "@/src/components/molecules/CardFilter/CardFilter";
import Card from "@/src/components/molecules/card/Card";
import CardSorter from "@/src/components/molecules/cardSorter/CardSorter";
import { useShopStore } from "@/src/store/shop-store";

export default function Home() {
  const { selectedFilters } = useShopStore();

  const productFilterForm = useForm({
    mode: "onChange",
    defaultValues: {
      category: selectedFilters.category || "",
      sortBy: selectedFilters.sortBy || "",
      order: selectedFilters.order || "",
    },
  });

  const {
    data: { products, total, skip, limit } = {},
    isLoading,
    error,
  } = useGetProductsQuery({
    category: selectedFilters.category || "",
    sortBy: selectedFilters.sortBy || "",
    order: selectedFilters.order || "",
    limit: selectedFilters.limit || 10,
    skip: selectedFilters.skip || 0,
    page: selectedFilters.page || 1,
  });
  if (error) {
    return <ErrorHandler message={error.message} cause={error.cause} />;
  }

  return (
    <>
      <div className="relative min-h-screen overflow-hidden pt-28">
        <div className="flex justify-end">
          <Suspense fallback={<div>Loading...</div>}>
            <CardSorter
              form={productFilterForm}
              numberOfProducts={products?.length || 0}
            />
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
            {products?.map(
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
          <Suspense fallback={<div>Loading...</div>}>
            <div className="col-span-12">
              <PaginationBar limit={limit} skip={skip} total={total ?? 0} />
            </div>
          </Suspense>
        </div>
      </div>
    </>
  );
}
