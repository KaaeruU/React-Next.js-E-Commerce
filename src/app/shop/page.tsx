"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, startTransition, useActionState } from "react";
import { useForm } from "react-hook-form";
import { Modal } from "@/src/components/atom/modal/Modal";
import PaginationBar from "@/src/components/atom/paginationBar/PaginationBar";
import { useProducts } from "@/src/components/atom/productsProvider/ProductsProvider";
import { CardFilter } from "@/src/components/molecules/CardFilter/CardFilter";
import Card from "@/src/components/molecules/card/Card";
import CardSorter from "@/src/components/molecules/cardSorter/CardSorter";
import { updateFiltersAction } from "@/src/lib/actions/updateFilter";
import { useShopStore } from "@/src/store/shop-store";

export default function Home() {
  const { selectedFilters } = useShopStore();
  const searchParams = useSearchParams();
  const [, formAction] = useActionState(updateFiltersAction, null);
  const router = useRouter();

  const productFilterForm = useForm({
    mode: "onChange",
    defaultValues: {
      category: selectedFilters.category || "",
      sortBy: selectedFilters.sortBy || "",
      order: selectedFilters.order || "",
      page: selectedFilters.page?.toString() || "1",
    },
  });

  const {
    initialData: { products, total, limit, skip },
    categories,
  } = useProducts();

  const handleFilterUpdate = (filters: {
    category?: string;
    sortBy?: string;
    order?: string;
    limit?: string;
    page?: string;
  }) => {
    const formData = new FormData();
    if (filters.category) formData.append("category", filters.category);
    if (filters.sortBy) formData.append("sortBy", filters.sortBy);
    if (filters.order) formData.append("order", filters.order);
    if (filters.limit) formData.append("limit", filters.limit);
    if (filters.page) formData.append("page", filters.page);

    startTransition(() => {
      formAction(formData);
      router.refresh();
    });
  };

  const selectedProductId = searchParams.get("modalId");

  const openModal = (productId: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("modalId", productId);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const closeModal = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("modalId");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <div className="relative min-h-screen overflow-hidden pt-28">
        <div className="flex w-[97%] justify-center md:justify-end">
          <Suspense fallback={<div>Loading...</div>}>
            <CardSorter
              form={productFilterForm}
              numberOfProducts={products?.length || 0}
              onSortChange={handleFilterUpdate}
            />
          </Suspense>
        </div>

        <div className="default-grid grid-container">
          <div className="col-span-12 mt-4 lg:col-span-3">
            <Suspense fallback={<div>Loading...</div>}>
              <CardFilter
                form={productFilterForm}
                onFilterChange={handleFilterUpdate}
                categories={categories || []}
                isFormDisabled={!!categories}
              />
            </Suspense>
          </div>

          <div
            className="col-span-12 grid gap-x-5 md:grid-cols-8 lg:col-start-4 lg:grid-cols-9
              2xl:grid-cols-12"
          >
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
                  productId={id}
                  title={title}
                  price={price}
                  img={images[0] || ""}
                  score={rating}
                  mountOfReview={reviews.length}
                  discount={discountPercentage}
                  onCardClick={() => openModal(id.toString())}
                />
              )
            )}
          </div>
          {selectedProductId && (
            <Modal
              productId={Number(selectedProductId)}
              onClose={closeModal}
              isOpen={!!selectedProductId}
            />
          )}

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
