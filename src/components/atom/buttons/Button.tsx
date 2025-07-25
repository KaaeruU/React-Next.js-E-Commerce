import React from "react";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonTypeProps } from "./button-type";
import { buttonVariants } from "@/src/lib/tailwind/button-style";
import { cn } from "@/src/lib/tailwind/utils";

const Button = React.forwardRef<HTMLButtonElement, ButtonTypeProps>(
  ({ className, variant, label, isDisabled, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            className,
          })
        )}
        ref={ref}
        {...props}
        disabled={isDisabled}
      >
        {label}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
