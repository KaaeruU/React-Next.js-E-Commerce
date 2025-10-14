import { useFormStatus } from "react-dom";
import { Button } from "@/src/components/atom/buttons/Button";

export const SubmitButton = ({
  isDisabled,
  className,
}: {
  isDisabled: boolean;
  className?: string;
}) => {
  const { pending } = useFormStatus();

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
