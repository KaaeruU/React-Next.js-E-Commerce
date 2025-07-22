import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/app/lib/tailwind/utils";
import type {
  HeadingType,
  HeadingTypeProps,
  HeadingVariant,
} from "./heading-type";

const Heading = <T extends HeadingType>({
  asChild,
  as,
  styledAs,
  className,
  children,
  ...props
}: HeadingTypeProps<T>) => {
  const Comp = asChild ? Slot : as || "h1";

  const headingStyles: Record<HeadingVariant, string> = {
    h1: "heading-h1",
    h2: "heading-h2",
    h4: "heading-h4",
  };
  const styleKey = styledAs;

  return (
    <Comp className={cn(headingStyles[styleKey], className)} {...props}>
      {children}
    </Comp>
  );
};

Heading.displayName = "Heading";
export { Heading };
