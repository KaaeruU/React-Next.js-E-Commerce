import { toast } from "sonner";
import { useActionState, useEffect } from "react";
import { Button } from "../buttons/Button";
import { deleteAllItem } from "@/src/lib/actions/deleteAllItem";

export const CartCleaner = ({ itemsLenght }: { itemsLenght?: number }) => {
  const [formState, formAction] = useActionState(deleteAllItem, {
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

  return (
    <form action={formAction} className="contents">
      <Button
        type="submit"
        variant="default_accent"
        label="Svuota il carrello"
        isDisabled={itemsLenght === 0}
      />
    </form>
  );
};
