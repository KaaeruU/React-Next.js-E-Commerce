"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { FormState } from "@/src/types/formState";

export async function removeCartItem(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const productId = formData.get("productId");
    const userId = 1;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_ROUTE_API}/cart/${userId}/items/${productId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response
        .json()
        .catch(() => ({ error: "Unknown error" }));

      return {
        success: false,
        message: "Errore nella rimozione dal carrello",
        error: errorData.error || "Failed to remove item from cart",
      };
    }

    revalidatePath(`/cart/${userId}`, "page");
    revalidateTag(`cart-${userId}`);

    return {
      success: true,
      message: "Prodotto rimosso dal carrello!",
    };
  } catch (error) {
    return {
      success: false,
      message: "Errore nella rimozione dal carrello",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
