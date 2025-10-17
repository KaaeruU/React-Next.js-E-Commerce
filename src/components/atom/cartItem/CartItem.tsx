import { toast } from "sonner";
import { useActionState, useEffect } from "react";
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
  const [formState, formAction] = useActionState(removeCartItem, {
    success: false,
    message: "",
  });
  useEffect(() => {
    if (formState?.success === true) {
      toast.success(formState.message);
    } else if (formState?.message ? formState.success === false : false) {
      toast.error(formState?.message);
    }
  }, [formState]);

  const { pending } = useFormStatus();
  return (
    <div
      className={`flex items-center justify-between gap-4 py-4 ${classname}`}
    >
      <form action={formAction} className="contents">
        <input type="hidden" name="productId" value={productId} />
        <button type="submit" className="contents" disabled={pending}>
          <Icon
            name={"Delete"}
            size={"24"}
            weight={"regular"}
            variant={"danger"}
          />
        </button>
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
