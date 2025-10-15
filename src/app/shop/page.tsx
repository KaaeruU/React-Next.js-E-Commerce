"use client";

import { useRouter } from "next/navigation";
import { Suspense, startTransition, useActionState } from "react";
import { useForm } from "react-hook-form";
import { Modal } from "@/src/components/atom/modal/Modal";
import PaginationBar from "@/src/components/atom/paginationBar/PaginationBar";
import { PortalWrapper } from "@/src/components/atom/portalWrapper/PortalWrapper";
import { useProducts } from "@/src/components/atom/productsProvider/ProductsProvider";
import { CardFilter } from "@/src/components/molecules/CardFilter/CardFilter";
import Card from "@/src/components/molecules/card/Card";
import CardSorter from "@/src/components/molecules/cardSorter/CardSorter";
import { useModal } from "@/src/hooks/useModal";
import { updateFiltersAction } from "@/src/lib/actions/updateFilter";
import { useShopStore } from "@/src/store/shop-store";

export default function Home() {
  const { selectedFilters } = useShopStore();
  const [, formAction] = useActionState(updateFiltersAction, null);
  const router = useRouter();

  const {
    selectedId: selectedProductId,
    openModal,
    closeModal,
    isOpen,
  } = useModal("modalId");

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
    if (filters.category !== undefined)
      formData.append("category", filters.category);
    if (filters.sortBy !== undefined) formData.append("sortBy", filters.sortBy);
    if (filters.order !== undefined) formData.append("order", filters.order);
    if (filters.limit) formData.append("limit", filters.limit);
    if (filters.page) formData.append("page", filters.page);

    startTransition(() => {
      formAction(formData);
      router.refresh();
    });
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
              min-[2000px]:grid-cols-12"
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
            <PortalWrapper wrapperId="modal-root">
              <Modal
                productId={Number(selectedProductId)}
                onClose={closeModal}
                isOpen={isOpen}
              />
            </PortalWrapper>
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
