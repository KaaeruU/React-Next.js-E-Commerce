"use client";

import { useEffect } from "react";
import { useGetCartQuery } from "@/src/api/queries/cart-query";
import { Button } from "@/src/components/atom/buttons/Button";
import { CartCleaner } from "@/src/components/atom/cartCleaner/CartCleaner";
import CartItem from "@/src/components/atom/cartItem/CartItem";
import { Heading } from "@/src/components/atom/heading/Heading";
import { Text } from "@/src/components/atom/text/Text";
import { useGlobalStore } from "@/src/store/global-store";

export default function Home() {
  const { data: { items } = {} } = useGetCartQuery();
  const setCartItemsCount = useGlobalStore((state) => state.setCartItemsCount);

  useEffect(() => {
    const count = items?.reduce((acc, item) => acc + item.quantity, 0) || 0;

    setCartItemsCount(count);
  }, [items, setCartItemsCount]);

  const total =
    items?.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;

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
        <div className="col-span-full">
          <Heading as={"h2"} styledAs={"h2"}>
            Riepilogo prodotti
          </Heading>
        </div>

        <div className="col-span-4 my-4 flex flex-col bg-neutral-50 p-4 md:col-span-8 lg:col-span-7">
          <div className="flex justify-between border-b border-gray-200 pb-2 text-gray-400">
            <Text as={"p"} styledAs={"label"}>
              Product
            </Text>
            <div className="flex">
              <Text
                as={"p"}
                styledAs={"label"}
                className="lg:pr-18 pr-8 md:pr-16 xl:pr-24"
              >
                Price
              </Text>
              <Text as={"p"} styledAs={"label"}>
                Quantity
              </Text>
            </div>
          </div>
          {items?.map(({ productId, title, price, quantity }) => (
            <CartItem
              key={productId}
              productId={productId}
              title={title}
              price={price}
              quantity={quantity}
              classname="border-b border-gray-200 pb-2"
            />
          ))}
          <div>
            <CartCleaner userId={1} itemsLenght={items?.length} />
          </div>
        </div>

        <div className="col-span-4 my-4 md:col-span-8 lg:col-span-4 lg:col-start-9">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <Heading as={"h3"} styledAs={"h4"} className="mb-4">
              Riepilogo ordine
            </Heading>

            <div className="space-y-3">
              <div className="flex justify-between">
                <Text as={"p"} styledAs={"body"}>
                  Subtotale
                </Text>
                <Text as={"p"} styledAs={"body"}>
                  ${total.toFixed(2)}
                </Text>
              </div>
              <div className="flex justify-between">
                <Text as={"p"} styledAs={"label"} className="font-bold">
                  Totale
                </Text>
                <Text as={"p"} styledAs={"label"} className="font-bold">
                  ${total.toFixed(2)}
                </Text>
              </div>
            </div>

            <div className="mt-6">
              <Button
                label="Procedi all'acquisto"
                variant="default_accent"
                className="w-full"
                isDisabled={!items?.length}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
