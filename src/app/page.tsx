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
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28">
        <div className="default-grid grid-container">
          <div className="col-span-3">
            <CardFilter />
          </div>
          <div className="col-span-9 col-start-4 grid-cols-9 gap-x-5 sm:contents lg:grid">
            {isLoading && <p>Caricamento...</p>}
            {error ? (
              <p>errore</p>
            ) : (
              data?.map(({ id, title, price, images, rating, reviews }) => (
                <Card
                  key={id}
                  title={title}
                  price={price}
                  img={images[0] || ""}
                  score={rating}
                  mountOfReview={reviews.length}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
