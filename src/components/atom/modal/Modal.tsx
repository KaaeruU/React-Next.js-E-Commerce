"use client";

import Image from "next/image";
import { useActionState, useEffect, useState } from "react";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import EmblaCarousel from "../carousel/Carousel";
import { Heading } from "../heading/Heading";
import { SubmitButton } from "../submitButton/SubmitButton";
import { Text } from "../text/Text";
import { ProductDetails, getProductDetails } from "@/src/api/getProduct";
import { TaggedDetails, getTaggedProducts } from "@/src/api/getProductsByTag";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/src/components/atom/modal/dialog";
import { addCartItem } from "@/src/lib/actions/addCartItem";

interface ModalProps {
  children?: React.ReactNode;
  productId: number;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ children, productId, isOpen, onClose }: ModalProps) => {
  const [, formAction] = useActionState(addCartItem, {
    success: false,
    message: "",
  });
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [taggedProducts, setTaggedProducts] = useState<TaggedDetails[] | null>(
    null
  );

  const handleCallProduct = async (productId: number) => {
    try {
      const productData = await getProductDetails(productId);
      setProduct(productData);
      if (productData) {
        const tagged = await getTaggedProducts(
          productId,
          3,
          productData.tags || []
        );
        setTaggedProducts(tagged ? tagged : null);
      }
    } catch (error) {
      console.error("Failed to fetch product:", error);
      setProduct(null);
    }
  };

  useEffect(() => {
    if (productId) {
      handleCallProduct(productId);
    }
  }, [productId]);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="rounded-xl bg-neutral-buttonPrimary text-white">
        <DialogHeader className="default-grid">
          <EmblaCarousel slides={product?.images || []} />
          <div className="col-span-2 flex flex-col justify-center md:col-span-8 lg:col-span-6">
            <DialogTitle>
              <div className="contents">
                <Heading as={"h3"} styledAs={"h2"}>
                  {product?.title ? product.title : "Product Title"}
                </Heading>
              </div>
            </DialogTitle>

            <DialogDescription>
              <div className="mb-4 mt-2 flex flex-wrap">
                {product?.tags ? (
                  product.tags.map((item) => (
                    <div
                      className="mr-2 mt-2 inline-block rounded-full border border-black bg-neutral-background
                        px-3 py-1 text-black transition-colors duration-300 ease-in-out
                        hover:bg-primary-orange"
                      key={item}
                    >
                      <Text as={"span"} styledAs={"body-xs"}>
                        {item}
                      </Text>
                    </div>
                  ))
                ) : (
                  // skeletons
                  <>
                    <div className="mr-2 h-8 w-16 animate-pulse rounded-full bg-gray-300"></div>
                    <div className="mr-2 h-8 w-20 animate-pulse rounded-full bg-gray-300"></div>
                    <div className="mr-2 h-8 w-14 animate-pulse rounded-full bg-gray-300"></div>
                  </>
                )}
              </div>
              <Text as={"label"} styledAs={"body"} className="!mt-4">
                {product?.description || (
                  <div className="h-20 w-full animate-pulse rounded bg-gray-300"></div>
                )}
              </Text>
            </DialogDescription>
            <div
              className="mt-5 flex items-center justify-around rounded-2xl border border-white py-4 pl-2
                md:!mt-10"
            >
              <Heading as={"h5"} styledAs={"h2"}>
                {product?.price ? "$ " + product?.price : "$"}
              </Heading>
              <form action={formAction} className="contents">
                <input type="hidden" name="productId" value={productId} />
                <input type="hidden" name="title" value={product?.title} />
                <input type="hidden" name="price" value={product?.price} />
                <input type="hidden" name="quantity" value={1} />
                <SubmitButton
                  isDisabled={false}
                  className="rounded-full bg-accent-yellow text-black hover:bg-primary-purple"
                  aria-label="Add to cart"
                />
              </form>
            </div>
          </div>
        </DialogHeader>

        <div className="w-full">
          <div className="flex justify-center">
            <Heading
              as={"h4"}
              styledAs={"h2"}
              className="mt-8 whitespace-nowrap md:mt-14 md:whitespace-normal"
            >
              You may also like
            </Heading>
          </div>

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
                      <Text
                        as="p"
                        styledAs="body"
                        className="line-clamp-1 text-white"
                      >
                        {title}
                      </Text>
                      <Text
                        as="p"
                        styledAs="body"
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
        </div>
      </DialogContent>
    </Dialog>
  );
};
