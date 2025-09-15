"use server";

import { revalidatePath } from "next/cache";
import { FormState } from "@/src/types/formState";

export async function deleteAllItem(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const userId = formData.get("userId") || 1;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_ROUTE_API}/cart/${userId}`,
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
        message: "Failed to clear cart",
        error: errorData.error || "Failed to clear cart",
      };
    }

    revalidatePath("/cart");

    return {
      success: true,
      message: "Cart cleared successfully!",
    };
  } catch (error) {
    return {
      success: false,
      message: "Errore nella rimozione dal carrello",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
