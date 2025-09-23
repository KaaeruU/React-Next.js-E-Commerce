import { Cart } from "@/src/types/cart.type";

export const getCart = async (userId: number = 1): Promise<Cart> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_ROUTE_API}/cart/${userId}`,
      {
        next: {
          tags: [`cart-${userId}`, "cart"],
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
