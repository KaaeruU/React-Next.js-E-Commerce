"use client";

import { CardFilter } from "../components/molecules/CardFilter/CardFilter";
import { useGlobalStore } from "../store/global-store";
import { useProductsQuery } from "@/src/api/queries/products-query";
import Card from "@/src/components/molecules/card/Card";

export default function Home() {
  const { selectedCategory } = useGlobalStore();
  const { data, isLoading, error } = useProductsQuery(selectedCategory);

  return (
    <>
      <div className="relative min-h-screen overflow-hidden pt-28">
        <div className="default-grid grid-container">
          <div className="col-span-12 lg:col-span-3">
            <CardFilter />
          </div>
          <div
            className="col-span-12 grid gap-x-5 md:grid-cols-8 lg:col-start-4 lg:grid-cols-9
              2xl:grid-cols-12"
          >
            {isLoading && <p>Caricamento...</p>}
            {error ? (
              <p>errore</p>
            ) : (
              data?.map(
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
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
