import { VariantProps } from "class-variance-authority";
import { IconName } from "../icon/icon-type";
import { inputVariants } from "@/src/lib/tailwind/inputs";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  placeholder: string;
  icon?: IconName;
}
