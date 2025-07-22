import type { ReactNode } from "react";

//Tag
export type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

//True classes
export type HeadingVariant = "h1" | "h2" | "h4";

export interface HeadingTypeProps<T extends HeadingType> {
  asChild?: boolean;
  as: T;
  styledAs: HeadingVariant;
  className?: string;
  children?: ReactNode;
}
