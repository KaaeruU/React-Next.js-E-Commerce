import type { VariantProps } from "class-variance-authority";
import type { buttonVariants } from "@/src/lib/tailwind/button-style";

export interface ButtonTypeProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  label: string;
  isDisabled: boolean;
}
