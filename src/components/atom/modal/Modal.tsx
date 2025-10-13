"use client";

import { useEffect, useState } from "react";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import EmblaCarousel from "../carousel/Carousel";
import { Heading } from "../heading/Heading";
import { Text } from "../text/Text";
import { ProductDetails, getProductDetails } from "@/src/api/getProduct";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/src/components/atom/modal/dialog";

interface ModalProps {
  children?: React.ReactNode;
  productId: number;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ children, productId, isOpen, onClose }: ModalProps) => {
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
              <Text as={"label"} styledAs={"body"} className="!mt-4">
                {product?.description}
              </Text>
            </DialogDescription>
          </>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
