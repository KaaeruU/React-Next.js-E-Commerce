"use client";

import { useGetCartQuery } from "@/src/api/queries/cart-query";
import CartItem from "@/src/components/atom/cartItem/CartItem";
import { Heading } from "@/src/components/atom/heading/Heading";

export default function Home() {
  const { data: { items } = {}, error } = useGetCartQuery();
  console.log(error);

  return (
    <div className="pt-32">
      <div className="default-grid grid-container mb-8">
        <div className="col-span-full">
          <Heading as={"h1"} styledAs={"h1"}>
            Il tuo carrello
          </Heading>
        </div>
      </div>

      <div className="default-grid grid-container">
        <div className="col-span-4 flex flex-col bg-neutral-50 p-4 md:col-span-8 lg:col-span-7">
          {items?.map(({ productId, title, price, quantity }) => (
            <CartItem
              key={productId}
              productId={productId}
              title={title}
              price={price}
              quantity={quantity}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
