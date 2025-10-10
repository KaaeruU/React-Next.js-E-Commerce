"use server";

import { createClient } from "@/src/utils/supabase/server";

export interface ProductDetails {
  id: number;
  title: string;
  description: string;
  images: string[];
}

export async function getProductDetails(
  productId: number
): Promise<ProductDetails | null> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("products")
      .select("id, title, description, images")
      .eq("id", productId)
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return null;
    }

    if (!data) {
      console.log("No product found with ID:", productId);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Error fetching product details:", error);
    return null;
  }
}
