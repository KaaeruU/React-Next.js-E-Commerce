import { CartItemProps } from "../components/atom/cartItem/cartItem.type";

export interface Cart {
  id: string;
  userId: string;
  items: CartItemProps[];
  createdAt: string;
  updatedAt: string;
}
