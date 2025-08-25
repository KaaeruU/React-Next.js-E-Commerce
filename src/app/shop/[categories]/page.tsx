"use client";

import { useEffect } from "react";
import { useGetProductsQuery } from "@/src/api/queries/products-query";
import { CardFilter } from "@/src/components/molecules/CardFilter/CardFilter";
import Card from "@/src/components/molecules/card/Card";
import { useGlobalStore } from "@/src/store/global-store";

export default function Home({
  params,
}: {
  params: Promise<{ categories: string }>;
}) {
  const { selectedCategory, setSelectedCategory } = useGlobalStore();

  const handleParams = async () => {
    const resolvedParams = await params;
    if (
      resolvedParams.categories &&
      resolvedParams.categories !== selectedCategory
    ) {
      setSelectedCategory(resolvedParams.categories);
    }
  };

  useEffect(() => {
    handleParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const { data, isLoading, error } = useGetProductsQuery(selectedCategory);

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
