"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { Cart } from "@/src/types/cart.type";
import { FormState } from "@/src/types/formState";
import { createClient } from "@/src/utils/supabase/server";

export async function removeCartItem(
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

    const productId = Number(formData.get("productId"));

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

    // Remove item from cart
    currentCart.items = currentCart.items.filter(
      (item) => item.productId !== productId
    );

    // Update cart in database
    const { error: updateError } = await supabase
      .from("users")
      .update({ cart: currentCart })
      .eq("id", user.id);

    if (updateError) {
      return {
        success: false,
        message: "Errore nella rimozione dal carrello",
        error: updateError.message,
      };
    }

    revalidatePath("/cart", "page");
    revalidateTag(`cart-${user.id}`);

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
