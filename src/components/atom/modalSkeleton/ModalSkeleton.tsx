export const ModalSkeleton = () => {
  return (
    <div className="rounded-xl bg-neutral-buttonPrimary text-white">
      <div className="default-grid">
        {/* Carousel Skeleton */}
        <div
          className="col-span-2 h-full w-full md:col-span-8 lg:col-span-6 lg:flex lg:flex-col
            lg:justify-start lg:pt-0"
        >
          <div className="overflow-hidden">
            <div className="flex h-full w-full select-none">
              <div className="relative min-w-0 flex-[0_0_100%]">
                <div className="relative aspect-square w-full xl:aspect-[4/3]">
                  <div className="h-full w-full animate-pulse rounded-2xl bg-gray-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Carousel buttons skeleton */}
          <div className="mt-4 flex justify-center">
            <div className="flex gap-2">
              <div className="h-8 w-8 animate-pulse rounded-full bg-gray-600" />
              <div className="h-8 w-8 animate-pulse rounded-full bg-gray-600" />
            </div>
          </div>
        </div>

        {/* Product Details Skeleton */}
        <div className="col-span-2 flex flex-col md:col-span-8 lg:col-span-6 lg:!mt-0">
          {/* Title skeleton */}
          <div className="contents">
            <div className="space-y-2">
              <div className="h-8 w-3/4 animate-pulse rounded-full bg-gray-600" />
              <div className="h-8 w-1/2 animate-pulse rounded-full bg-gray-600" />
            </div>
          </div>

          {/* Tags skeleton */}
          <div className="mb-4 mt-2 flex flex-wrap">
            <div className="mr-2 mt-2 h-8 w-16 animate-pulse rounded-full bg-gray-600" />
            <div className="mr-2 mt-2 h-8 w-20 animate-pulse rounded-full bg-gray-600" />
            <div className="mr-2 mt-2 h-8 w-14 animate-pulse rounded-full bg-gray-600" />
          </div>

          {/* Description skeleton */}
          <div className="!mt-4 space-y-2">
            <div className="h-4 w-full animate-pulse rounded-full bg-gray-600" />
            <div className="h-4 w-full animate-pulse rounded-full bg-gray-600" />
            <div className="h-4 w-3/4 animate-pulse rounded-full bg-gray-600" />
            <div className="h-4 w-2/3 animate-pulse rounded-full bg-gray-600" />
          </div>

          {/* Price and Button skeleton */}
          <div className="mt-5 flex flex-col py-4 pl-2 md:!mt-10">
            {/* Price skeleton */}
            <div className="h-12 w-32 animate-pulse rounded-full bg-gray-600" />

            {/* Button skeleton */}
            <div className="mt-3 h-12 w-full animate-pulse rounded-full bg-gray-600" />
          </div>
        </div>
      </div>

      {/* Related Products Skeleton */}
      <div className="w-full">
        {/* "You may also like" title skeleton */}
        <div className="flex justify-center">
          <div className="mt-8 h-8 w-48 animate-pulse rounded-full bg-gray-600 md:mt-14" />
        </div>

        {/* Related products grid skeleton */}
        <div className="mt-6 flex w-full">
          <div className="flex w-full flex-nowrap justify-evenly gap-4 overflow-x-auto">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                className="flex min-w-0 flex-shrink-0 flex-col items-center space-y-2"
                key={`related-skeleton-${index}`}
              >
                {/* Product image skeleton */}
                <div className="h-24 w-24 animate-pulse rounded-lg bg-gray-600 xl:h-40 xl:w-40" />

                {/* Product details skeleton */}
                <div className="flex w-32 flex-col items-center space-y-1">
                  {/* Title skeleton */}
                  <div className="h-4 w-full animate-pulse rounded-full bg-gray-600" />
                  <div className="h-4 w-3/4 animate-pulse rounded-full bg-gray-600" />

                  {/* Price skeleton */}
                  <div className="h-3 w-16 animate-pulse rounded-full bg-gray-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
