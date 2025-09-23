"use server";

import z from "zod";
import { revalidatePath, revalidateTag } from "next/cache";
import { FormState } from "@/src/types/formState";

const FormSchema = z.object({
  productId: z.coerce.number(),
  title: z.string(),
  price: z.coerce.number(),
  quantity: z.coerce.number(),
});

export async function addCartItem(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const userId = 1;
    const validatedFields = FormSchema.parse({
      productId: formData.get("productId"),
      title: formData.get("title"),
      price: formData.get("price"),
      quantity: formData.get("quantity"),
    });

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_ROUTE_API}/cart/1/items`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedFields),
      }
    );

    if (!response.ok) {
      const errorData = await response
        .json()
        .catch(() => ({ error: "Unknown error" }));

      return {
        success: false,
        message: "Errore nell'aggiunta al carrello",
        error: errorData.error || "Unknown error",
      };
    }

    revalidatePath(`/cart/${userId}`, "page");
    revalidateTag(`cart-${userId}`);

    return {
      success: true,
      message: "Prodotto aggiunto al carrello!",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Dati non validi",
      };
    }

    return {
      success: false,
      message: "Errore nell'aggiunta al carrello",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
