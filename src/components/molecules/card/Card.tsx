"use client";

import Image from "next/image";
import { useActionState, useRef, useState } from "react";
import { CardProps } from "./card-type";
import CounterButton from "@/src/components/atom/counterButton/CounterButton";
import { Heading } from "@/src/components/atom/heading/Heading";
import { Icon } from "@/src/components/atom/icon/Icon";
import { SubmitButton } from "@/src/components/atom/submitButton/SubmitButton";
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
  onCardClick,
  className = "",
}: CardProps) => {
  const [count, setCount] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  const [, formAction] = useActionState(addCartItem, {
    success: false,
    message: "",
  });

  return (
    <article
      className={`col-span-3 my-5 w-full md:col-span-4 lg:col-span-3 ${className} border
        border-neutral-500 border-opacity-30 hover:shadow-lg`}
    >
      <div className="bg-white">
        <div className="contents cursor-pointer" onClick={onCardClick}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-b-xl">
            <Image
              src={img}
              alt={"image of the product"}
              className="object-cover"
              fill
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
            <div className="mx-4 flex h-24 items-center justify-start border-b-2 border-gray-300/20">
              <Heading as={"h3"} styledAs={"h2"} className="py-4 !capitalize">
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
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-nowrap justify-between p-4">
            <CounterButton count={count} setCount={setCount} />

            <form ref={formRef} action={formAction} className="contents">
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
