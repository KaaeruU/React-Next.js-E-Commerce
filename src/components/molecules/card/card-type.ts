import { ComponentProps } from "react";

export interface CardProps extends ComponentProps<"article"> {
  title: string;
  price: string;
  img: string;
  score: number;
  mountOfReview: number;
  count: number;
}
