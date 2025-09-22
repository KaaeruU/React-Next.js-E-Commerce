import { useActionState, useEffect } from "react";
import { Button } from "../buttons/Button";
import { deleteAllItem } from "@/src/lib/actions/deleteAllItem";
import { cartQueryKey } from "@/src/utils/constants/query-key";
import { useQueryClient } from "@tanstack/react-query";

export const CartCleaner = ({
  userId,
  itemsLenght,
}: {
  userId: number;
  itemsLenght?: number;
}) => {
  const [state, formAction] = useActionState(deleteAllItem, {
    success: false,
    message: "",
  });
  const queryClient = useQueryClient();

  useEffect(() => {
    if (state.success) {
      queryClient.invalidateQueries({ queryKey: [cartQueryKey] });
    }
  }, [state.success, queryClient]);

  return (
    <form action={formAction} className="contents">
      <input type="hidden" name="userId" value={userId} />
      <Button
        type="submit"
        variant="default_accent"
        label="Svuota il carrello"
        isDisabled={itemsLenght === 0}
      ></Button>
    </form>
  );
};
