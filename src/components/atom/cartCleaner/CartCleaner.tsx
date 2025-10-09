import { useActionState } from "react";
import { Button } from "../buttons/Button";
import { deleteAllItem } from "@/src/lib/actions/deleteAllItem";

export const CartCleaner = ({ itemsLenght }: { itemsLenght?: number }) => {
  const [, formAction] = useActionState(deleteAllItem, {
    success: false,
    message: "",
  });

  return (
    <form action={formAction} className="contents">
      <Button
        type="submit"
        variant="default_accent"
        label="Svuota il carrello"
        isDisabled={itemsLenght === 0}
      ></Button>
    </form>
  );
};
