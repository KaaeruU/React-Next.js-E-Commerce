import Image from "next/image";
import { Text } from "../text/Text";
import { TaggedDetails } from "@/src/api/getProductsByTag";

interface TaggedProductsListProps {
  taggedProducts: TaggedDetails[];
}

export const TaggedProductsList = ({
  taggedProducts,
}: TaggedProductsListProps) => {
  return (
    <div className="mt-6 flex w-full">
      {taggedProducts && (
        <div className="flex w-full flex-nowrap justify-evenly gap-4 overflow-x-auto">
          {taggedProducts.map(({ id, images, title, price }) => (
            <div
              className="flex min-w-0 flex-shrink-0 flex-col items-center space-y-2"
              key={id}
            >
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg xl:h-40 xl:w-40">
                <Image
                  src={images[0]}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex w-32 items-center space-y-1">
                <Text as="p" styledAs="body" className="truncate text-white">
                  {title}
                </Text>
                <Text
                  as="p"
                  styledAs="body-xs"
                  className="pl-5 font-bold text-gray-300"
                >
                  ${price}
                </Text>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
