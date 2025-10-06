"use client";

import Image from "next/image";
import { useActionState, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { CardProps } from "./card-type";
import { Button } from "@/src/components/atom/buttons/Button";
import CounterButton from "@/src/components/atom/counterButton/CounterButton";
import { Heading } from "@/src/components/atom/heading/Heading";
import { Icon } from "@/src/components/atom/icon/Icon";
import { Text } from "@/src/components/atom/text/Text";
import { addCartItem } from "@/src/lib/actions/addCartItem";

const Card = ({
  productId,
  title,
  price,
  img,
  score,
  mountOfReview,
  discount,
  className = "",
}: CardProps) => {
  const [count, setCount] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, formAction] = useActionState(addCartItem, {
    success: false,
    message: "",
  });

  function SubmitButton({ isDisabled }: { isDisabled: boolean }) {
    const { pending } = useFormStatus();

    return (
      <Button
        type="submit"
        label={pending ? "Aggiungendo..." : "Aggiungi al carrello"}
        isDisabled={isDisabled || pending}
        variant="secondary"
        className="md:w-1/2 md:text-14 lg:px-0"
      />
    );
  }

  return (
    <article
      className={`col-span-3 my-5 h-full w-full md:col-span-4 lg:col-span-3 ${className}`}
    >
      <div className="bg-white">
        <div className="relative h-auto w-auto">
          <Image
            src={img}
            alt={"image of the product"}
            width={398}
            height={155}
            quality={70}
          />
          {discount && (
            <div className="absolute left-0 top-5 z-10 rounded-br-lg bg-accent-yellow p-3">
              <Text as={"span"} styledAs={"body-xs"} className="!font-bold">
                In offerta -{discount}%
              </Text>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <div className="mx-4 h-24 border-b-2 border-gray-300/20">
            <Heading as={"h3"} styledAs={"h4"} className="py-4">
              {title}
            </Heading>
          </div>

          <div className="mx-4 pt-4">
            <div className="pb-2">
              <Heading as={"h4"} styledAs={"h4"}>
                {"$ " + price}
              </Heading>
            </div>
            <div className="flex justify-start text-gray-500">
              <Icon name={"Star"} size={"16"} weight={"regular"} />
              <Text as={"p"} styledAs={"body-xs"} className="pl-2">
                {score}
              </Text>
              <Text as={"p"} styledAs={"body-xs"} className="pl-1">
                {`(${mountOfReview} recensioni)`}
              </Text>
            </div>
          </div>
          <div className="flex flex-nowrap justify-between p-4">
            <CounterButton count={count} setCount={setCount} />

            <form
              ref={formRef}
              method="POST"
              action={formAction}
              className="contents"
            >
              <input type="hidden" name="productId" value={productId} />
              <input type="hidden" name="title" value={title} />
              <input type="hidden" name="price" value={price} />
              <input type="hidden" name="quantity" value={count} />
              <SubmitButton isDisabled={count === 0} />
            </form>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
