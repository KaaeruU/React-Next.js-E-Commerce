import { ComponentProps } from "react";
import { FieldValues } from "react-hook-form";

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

export interface TFieldValues extends FieldValues {
  success: boolean;
  message: string;
  error?: string | undefined;
}
