import { VariantProps } from "class-variance-authority";
import { inputVariants } from "@/app/lib/tailwind/inputs";
import { IconName } from "../icon/icon-type";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  placeholder: string;
  icon?: IconName;
}
