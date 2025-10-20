import { cache } from "react";
import { Cart } from "@/src/types/cart.type";
import { createClient } from "@/src/utils/supabase/server";

const getCachedCart = async (): Promise<Cart> => {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  //BETTER HANDLE ERRORS
  if (error || !user) {
    return null as unknown as Cart;
  }

  const { data, error: cartError } = await supabase
    .from("users")
    .select("cart")
    .eq("id", user.id)
    .single();

  if (cartError) {
    console.error("Supabase error:", cartError);
    return {
      id: user.id,
      userId: user.id,
      items: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }

  return (
    data?.cart || {
      id: user.id,
      userId: user.id,
      items: [],
      totalAmount: 0,
      totalItems: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  );
};

export const getCart = cache(getCachedCart);
