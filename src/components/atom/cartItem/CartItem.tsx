import React from "react";
import { Icon } from "../icon/Icon";
import { CartItemProps } from "./cartItem.type";
import { Text } from "@/src/components/atom/text/Text";

const CartItem = ({ title, price, quantity, classname }: CartItemProps) => {
  return (
    <div
      className={`flex items-center justify-between gap-4 py-4 ${classname}`}
    >
      <Icon name={"Delete"} size={"24"} weight={"regular"} variant={"danger"} />

      <div className="max-w-48 flex-1">
        <Text as={"p"} styledAs={"label"} className="truncate">
          {title}
        </Text>
      </div>

      <Text as={"p"} styledAs={"label"} className="shrink-0">
        ${price}
      </Text>
      <Text as={"p"} styledAs={"label"} className="shrink-0">
        {quantity}
      </Text>
    </div>
  );
};

export default CartItem;
