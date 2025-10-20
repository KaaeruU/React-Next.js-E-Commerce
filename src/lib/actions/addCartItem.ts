"use server";

import z from "zod";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { Cart } from "@/src/types/cart.type";
import { FormState } from "@/src/types/formState";
import { createClient } from "@/src/utils/supabase/server";

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
    const supabase = await createClient();

    // Get authenticated user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      redirect("/");
    }

    const validatedFields = FormSchema.parse({
      productId: formData.get("productId"),
      title: formData.get("title"),
      price: formData.get("price"),
      quantity: formData.get("quantity"),
    });

    // Get current cart
    const { data: userData, error: fetchError } = await supabase
      .from("users")
      .select("cart")
      .eq("id", user.id)
      .single();

    if (fetchError) {
      return {
        success: false,
        message: "Errore nel recupero del carrello",
        error: fetchError.message,
      };
    }

    const currentCart: Cart = userData?.cart;

    // Check if item already exists in cart
    const existingItemIndex = currentCart.items.findIndex(
      (item) => item.productId === validatedFields.productId
    );

    if (existingItemIndex >= 0) {
      // Update quantity if item exists
      currentCart.items[existingItemIndex].quantity += validatedFields.quantity;
    } else {
      currentCart.items.push({
        productId: validatedFields.productId,
        title: validatedFields.title,
        price: validatedFields.price,
        quantity: validatedFields.quantity,
      });
    }

    // Update cart in database
    const { error: updateError } = await supabase
      .from("users")
      .update({ cart: currentCart })
      .eq("id", user.id);

    if (updateError) {
      return {
        success: false,
        message: "Errore nell'aggiunta al carrello",
        error: updateError.message,
      };
    }

    revalidatePath("/cart", "page");
    revalidateTag(`cart-${user.id}`);

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
