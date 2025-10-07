import { cache } from "react";
import { Cart } from "@/src/types/cart.type";

const getCachedCart = async (userId: number = 1): Promise<Cart> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_ROUTE_API}/cart/${userId}`,
      {
        next: {
          tags: [`cart-${userId}`, "cart"],
          revalidate: 300,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    const cart: Cart = responseData.data;
    return cart;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};

export const getCart = cache(getCachedCart);
