"use client";

import { Suspense } from "react";
import { useGetProductsQuery } from "@/src/api/queries/products-query";
import { ErrorHandler } from "@/src/components/atom/ErrorHandler/ErrorHandler";
import { CardFilter } from "@/src/components/molecules/CardFilter/CardFilter";
import Card from "@/src/components/molecules/card/Card";
import { useGlobalStore } from "@/src/store/global-store";

export default function Home() {
  const { selectedCategory } = useGlobalStore();

  const { data, isLoading, error } = useGetProductsQuery(selectedCategory);
  if (error) {
    return <ErrorHandler message={error.message} cause={error.cause} />;
  }

  return (
    <>
      <div className="relative min-h-screen overflow-hidden pt-28">
        <div className="default-grid grid-container">
          <div className="col-span-12 lg:col-span-3">
            {/*creare skeleton per cardfilter*/}
            <Suspense fallback={<div>Loading...</div>}>
              <CardFilter />
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
