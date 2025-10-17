import { toast } from "sonner";
import { useEffect } from "react";
import { useFormStatus } from "react-dom";
import { TFieldValues } from "../../molecules/card/card-type";
import { Button } from "@/src/components/atom/buttons/Button";

interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isDisabled: boolean;
  className?: string;
  formState?: TFieldValues;
}

export const SubmitButton = ({
  isDisabled,
  className,
  formState,
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  useEffect(() => {
    if (formState?.success === true) {
      toast.success(formState.message);
    } else if (formState?.message ? formState.success === false : false) {
      toast.error(formState?.message);
    }
  }, [formState]);

  return (
    <Button
      type="submit"
      label={pending ? "Aggiungendo..." : "Aggiungi al carrello"}
      isDisabled={isDisabled || pending}
      variant="secondary"
      className={`md:w-1/2 md:text-14 lg:px-0 ${className}`}
    />
  );
};
