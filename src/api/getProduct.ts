import { cache } from "react";
import { createClient } from "@/src/utils/supabase/client";

export interface ProductDetails {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
  tags?: string[];
}

export async function getCachedProduct(
  productId: number
): Promise<ProductDetails | null> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("products")
      .select("id, title, price, description, tags, images")
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

    return {
      id: data.id,
      title: data.title,
      description: data.description,
      images: data.images || [],
      price: data.price,
      tags: data.tags || [],
    };
  } catch (error) {
    console.error("Error fetching product details:", error);
    return null;
  }
}

export const getProductDetails = cache(getCachedProduct);
