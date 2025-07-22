import type { ReactNode } from "react";

//Tag
export type TextType = "p" | "span" | "label";

//True classes
export type TextVariant = "button" | "body" | "label" | "body-xs";

export interface TextTypeProps<T extends TextType> {
  asChild?: boolean;
  children?: ReactNode;
  as: T;
  styledAs: TextVariant;
  className?: string;
}
