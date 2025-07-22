import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { buttonVariants } from "@/app/lib/tailwind/button-style";
import { cn } from "@/app/lib/tailwind/utils";
import type { ButtonTypeProps } from "./button-type";

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
