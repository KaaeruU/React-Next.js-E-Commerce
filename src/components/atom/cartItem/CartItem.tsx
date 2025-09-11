import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Icon } from "../icon/Icon";
import { CartItemProps } from "./cartItem.type";
import { Text } from "@/src/components/atom/text/Text";
import { removeCartItem } from "@/src/lib/actions/deleteCartItem";

const CartItem = ({
  productId,
  title,
  price,
  quantity,
  classname,
}: CartItemProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, formAction] = useActionState(removeCartItem, {
    success: false,
    message: "",
  });

  const DeleteIconButton = () => {
    const { pending } = useFormStatus();

    return (
      <button type="submit" className="contents" disabled={pending}>
        <Icon
          name={"Delete"}
          size={"24"}
          weight={"regular"}
          variant={"danger"}
        />
      </button>
    );
  };
  return (
    <div
      className={`flex items-center justify-between gap-4 py-4 ${classname}`}
    >
      <form action={formAction} className="contents">
        <input type="hidden" name="productId" value={productId} />
        <DeleteIconButton />
      </form>

      <div className="max-w-48 flex-1">
        <Text as={"p"} styledAs={"label"} className="truncate">
          {title}
        </Text>
      </div>

      <Text as={"p"} styledAs={"label"} className="shrink-0">
        ${price.toFixed(2)}
      </Text>
      <Text as={"p"} styledAs={"label"} className="shrink-0">
        {quantity}
      </Text>
    </div>
  );
};

export default CartItem;
