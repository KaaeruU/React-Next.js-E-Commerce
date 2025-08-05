import { Slot } from "@radix-ui/react-slot";
import type { TextType, TextTypeProps, TextVariant } from "./text-type";
import { cn } from "@/src/lib/tailwind/utils";

const Text = <T extends TextType>({
  asChild,
  as,
  styledAs,
  className,
  children,
  ...props
}: TextTypeProps<T>) => {
  const Comp = asChild ? Slot : as || "p";

  const textStyles: Record<TextVariant, string> = {
    "body-xs": "body-xs",
    button: "body-md",
    label: "label-regular",
    body: "body-regular",
  };
  const styleKey = styledAs;

  return (
    <Comp className={cn(textStyles[styleKey], className)} {...props}>
      {children}
    </Comp>
  );
};

Text.displayName = "Text";
export { Text };
