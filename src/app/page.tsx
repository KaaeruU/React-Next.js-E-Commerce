"use client";

import { useProductsQuery } from "../api/queries/products-query";
import Card from "../components/molecules/card/Card";

export default function Home() {
  const { data, isLoading, error } = useProductsQuery();

  if (isLoading) return <div>Caricamento...</div>;

  return (
    <>
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="default-grid grid-container">
          {error ? (
            <p>errore</p>
          ) : (
            data?.map(({ id, title, price, images, rating, reviews }) => (
              <div className="col-span-3 my-10">
                <Card
                  key={id}
                  title={title}
                  price={price}
                  img={images[0] || ""}
                  score={rating}
                  mountOfReview={reviews.length}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
