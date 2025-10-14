"use client";

import { useActionState, useEffect, useState } from "react";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import EmblaCarousel from "../carousel/Carousel";
import { Heading } from "../heading/Heading";
import { SubmitButton } from "../submitButton/SubmitButton";
import { Text } from "../text/Text";
import { ProductDetails, getProductDetails } from "@/src/api/getProduct";
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

  const handleCallProduct = async (productId: number) => {
    try {
      const productData = await getProductDetails(productId);
      setProduct(productData);
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
      <DialogContent className="bg-neutral-buttonPrimary text-white">
        <DialogHeader>
          <>
            <EmblaCarousel slides={product?.images || []} />
            <DialogTitle>
              <div className="contents">
                <Heading as={"h3"} styledAs={"h2"}>
                  {product?.title}
                </Heading>
              </div>
            </DialogTitle>
            <DialogDescription>
              <div className="mb-4 mt-2 flex flex-wrap">
                {product?.tags?.map((item) => (
                  <button
                    className="mr-2 inline-block rounded-full border border-black bg-neutral-background px-3
                      py-1 text-black transition-colors duration-300 ease-in-out
                      hover:bg-primary-orange"
                    key={item}
                  >
                    <Text as={"span"} styledAs={"body-xs"}>
                      {item}
                    </Text>
                  </button>
                ))}
              </div>
              <Text as={"label"} styledAs={"body"} className="!mt-4">
                {product?.description}
              </Text>
            </DialogDescription>
            <div className="!mt-10 flex items-center justify-around">
              <Heading as={"h5"} styledAs={"h2"}>
                {"$ " + product?.price}
              </Heading>
              <form action={formAction} className="contents">
                <input type="hidden" name="productId" value={productId} />
                <input type="hidden" name="title" value={product?.title} />
                <input type="hidden" name="price" value={product?.price} />
                <input type="hidden" name="quantity" value={1} />
                <SubmitButton
                  isDisabled={false}
                  className="bg-accent-yellow text-black hover:bg-primary-purple"
                  aria-label="Add to cart"
                />
              </form>
            </div>
          </>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
