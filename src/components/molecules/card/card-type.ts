import { ComponentProps } from "react";

export interface CardProps extends ComponentProps<"article"> {
  productId: number;
  title: string;
  price: number;
  img: string;
  score: number;
  mountOfReview: number;
  className?: string;
  discount?: number;
  images?: string[];
  description?: string;
  onCardClick?: () => void;
}
