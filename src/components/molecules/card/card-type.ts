import { ComponentProps } from "react";

export interface CardProps extends ComponentProps<"article"> {
  title: string;
  price: number;
  img: string;
  score: number;
  mountOfReview: number;
}
